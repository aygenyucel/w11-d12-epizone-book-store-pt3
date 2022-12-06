import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import {
  setUsernameAction,
  setUsernameActionAsync,
} from "./../redux/actions/index";

//useSelector is a Redux Hook coming from the bindings library
//that can grant to this component "read access" to the Redux Store

const CartIndicator = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [value, setValue] = useState("");
  //value keeps track of the content of the input field!
  const cartLength = useSelector((state) => state.cart.content.length);
  //now cartLength is always going to be a digit: the length of the
  //content array sitting in the cart slice of the store

  const userName = useSelector((state) => state.user.name);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setUsernameActionAsync(value));
  };

  return (
    <div className="ml-auto mt-3 mb-4">
      {userName ? (
        <div>
          <span className="mr-3">Hello, {userName}!</span>
          <Button color="primary" onClick={() => navigate("/cart")}>
            <FaShoppingCart />
            <span className="ml-2">{cartLength}</span>
          </Button>
        </div>
      ) : (
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="text"
              placeholder="User name"
              value={value}
              onChange={(e) => {
                setValue(e.target.value);
              }}
            />
          </Form.Group>
        </Form>
      )}
    </div>
  );
};

export default CartIndicator;
