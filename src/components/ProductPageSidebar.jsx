import { Apps } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import styles from "./ProductPageSidebar.module.css";
import Discount from "./UI/Discount";
import { useDispatch, useSelector } from "react-redux";
import { purchase, updateCart, userCart, userOrders } from "../redux/apiCalls";
import { Link, useNavigate } from "react-router-dom";
import { calcDiscount } from "../data";
import { userRequest } from "../requestMethods";
import { CircularProgress } from "@mui/material";
import StripeCheckout from "react-stripe-checkout";

const ProductPageSidebar = ({ product }) => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart.products);
  const orders = useSelector((state) => state.order.orders);

  const cart = useSelector((state) => state.cart);
  const { isFetching } = useSelector((state) => state.cart);

  const navigate = useNavigate();

  //Add to cart
  const updatedCartData = {
    userId: JSON.parse(localStorage.getItem("currentUser"))?._id,
    products: [
      ...cart.products.map((item) => ({
        productId: item._id,
        productSlug: item.productSlug,
      })),
      {
        productId: product?._id,
        productSlug: product?.productSlug,
      },
    ],
  };
  const handleAddToCart = !isFetching
    ? () => {
        JSON.parse(localStorage.getItem("currentUser"))
          ? updateCart(
              dispatch,
              cart.id,
              updatedCartData,
              JSON.parse(localStorage.getItem("currentUser"))
            )
          : navigate("/login");
      }
    : null;

  //Purchase
  const KEY = process.env.REACT_APP_STRIPE;
  const [stripeToken, setStripeToken] = useState(null);

  const onToken = !isFetching
    ? (token) => {
        setStripeToken(token);
      }
    : null;

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await userRequest.post("/checkout/payment", {
          tokenId: stripeToken.id,
          amount: product.sale
            ? calcDiscount(product.price, product.sale) * 100
            : product.price * 100,
        });
        purchase(
          dispatch,
          {
            userId: JSON.parse(localStorage.getItem("currentUser"))?._id,
            products: [
              {
                productId: product._id,
                productSlug: product.productSlug,
              },
            ],
            amount: product.sale
              ? calcDiscount(product.price, product.sale)
              : product.price,
          },
          cart,
          JSON.parse(localStorage.getItem("currentUser"))
        );
        setStripeToken(null);
        console.log("???????????? ???????????? ?????????????? -", res.data);
      } catch (err) {
        console.log("???????????? ???????????? -", err);
      }
    };
    stripeToken && makeRequest();
  }, [stripeToken]);

  useEffect(() => {
    const getData = async () => {
      await userCart(
        dispatch,
        JSON.parse(localStorage.getItem("currentUser"))?._id,
        JSON.parse(localStorage.getItem("currentUser"))?.accessToken
      );
      await userOrders(
        dispatch,
        JSON.parse(localStorage.getItem("currentUser"))?._id,
        JSON.parse(localStorage.getItem("currentUser"))?.accessToken
      );
    };
    getData();
  }, []);

  // --

  // ---
  const library =
    orders.length &&
    orders.some((item) => item.productSlug === product.productSlug);

  return (
    <div className={styles.container}>
      <div className={styles.img__container}>
        <img
          src={product.img}
          loading="lazy"
          alt="product img"
          className={styles.img}
        />
      </div>

      <div className={styles.type}>
        <span className={styles.type__text}>?????????????? ????????</span>
      </div>

      <div className={styles.price__container}>
        {product.sale ? (
          <>
            <Discount discount={product.sale} />
            <div className={styles.old__price}>{product.price} ??????.</div>
          </>
        ) : null}
        <div className={styles.price}>
          {product.price === 0
            ? "??????????????????"
            : product.sale
            ? calcDiscount(product.price, product.sale)
            : product.price}
          {product.price === 0 ? "" : " ??????."}
        </div>
      </div>

      <div className={styles.btns}>
        {library ? (
          <div
            className={styles.library + " " + styles.btn}
            onClick={() => navigate("/library")}
          >
            <Apps
              style={{
                height: "1vw",
                width: "1vw",
              }}
            />
            <span>?? ????????????????????</span>
          </div>
        ) : (
          <>
            {JSON.parse(localStorage.getItem("currentUser")) ? (
              <StripeCheckout
                name="GAME STORE"
                image="http://unsplash.it/375/375"
                currency="RUB"
                description={`?????????? ?? ???????????? ${product.price}??????.`}
                amount={product.price * 100}
                token={onToken}
                stripeKey={KEY}
              >
                <button
                  className={styles.buy__now + " " + styles.btn}
                  disabled={isFetching}
                >
                  ???????????? ????????????
                </button>
              </StripeCheckout>
            ) : (
              <button
                className={styles.buy__now + " " + styles.btn}
                disabled={isFetching}
                onClick={() => navigate("/login")}
              >
                ???????????? ????????????
              </button>
            )}

            {products.some(
              (item) => item.productSlug === product.productSlug
            ) ? (
              <Link to="/cart" className={styles.cart + " " + styles.btn}>
                ???????????????????? ?? ??????????????
              </Link>
            ) : (
              <button
                className={styles.cart + " " + styles.btn}
                disabled={isFetching}
                onClick={handleAddToCart}
              >
                {isFetching ? (
                  <CircularProgress
                    style={{ width: "1.5vw", height: "1.5vw" }}
                  />
                ) : (
                  "???????????????? ?? ??????????????"
                )}
              </button>
            )}
          </>
        )}
      </div>

      <div className={styles.info}>
        <div className={styles.info__line}>
          <span className={styles.info__title}>??????????????????????</span>
          <span className={styles.info__value}>{product.developer}</span>
        </div>

        <div className={styles.info__line}>
          <span className={styles.info__title}>????????????????</span>
          <span className={styles.info__value}>{product.publisher}</span>
        </div>

        <div className={styles.info__line}>
          <span className={styles.info__title}>???????? ????????????</span>
          <span className={styles.info__value}>{product.releaseDate}</span>
        </div>

        <div className={styles.info__line}>
          <span className={styles.info__title}>??????????????????</span>
          <span className={styles.info__value}>{product.platform}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductPageSidebar;
