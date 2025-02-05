import React, { useState } from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import LockResetRoundedIcon from "@mui/icons-material/LockResetRounded";
import Logout from "@mui/icons-material/Logout";
import app from "../config/firebaseConfig";
import { useNavigate } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import axios from "axios";
import { toast } from "react-toastify";
import EditIcon from "@mui/icons-material/Edit";
import "react-toastify/dist/ReactToastify.css";
import "../style/ProfileModal.css";

export default function ProfileModal({ anchorEl, open, handleClose }) {
  const auth = getAuth(app);
  const navigate = useNavigate();
  const [state, setState] = useState("");

  function signout() {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
        toast.success("Signed out Successfull", {
          position: "top-right",
          autoClose: 1500
        });
      })
      .catch((error) => {
        // An error happened.
        toast.error("Error Signing out", {
          position: "top-right",
          autoClose: 1500
        });
      });
  }

  const Modal = () => {
    const [formData, setFormData] = useState({
      fullName: "",
      password: ""
    });

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value
      });
    };

    const closeModal = () => {
      setState("");
    };
    const handleOverlayClick = (e) => {
      if (e.target === e.currentTarget) {
        closeModal(); // Close the modal when clicking on the overlay
      }
    };

    return (
      <div className="modal" onClick={handleOverlayClick}>
        <div className="modal-content">
          <div className="Maincontainer">
            <Container className="AffiliatesContainer">
              <Row className="containerForm ">
                <Col>
                  <div className="before-after-text"></div>
                  <h2>
                    {state === "name" && "Update Name"}
                    {state === "password" && "Change Password"}
                  </h2>
                  {state === "name" && (
                    <Form className="FormPage">
                      <Form.Group className="Group">
                        <Form.Label className="LeftAlignedLabel">
                          Full Name
                        </Form.Label>
                        <Form.Control
                          type="text"
                          name="fullName"
                          placeholder="Enter your full name"
                          className="FormInput"
                          value={formData.fullName}
                          onChange={handleChange}
                        />
                      </Form.Group>
                    </Form>
                  )}
                  {state === "password" && (
                    <Form className="FormPage">
                      <Form.Group className="Group">
                        <Form.Label className="LeftAlignedLabel">
                          Password
                        </Form.Label>
                        <Form.Control
                          type="text"
                          name="password"
                          placeholder="Enter your password"
                          className="FormInput"
                          value={formData.password}
                          onChange={handleChange}
                        />
                      </Form.Group>
                    </Form>
                  )}
                  <Button
                    variant="primary"
                    className="submit w-100"
                    //onClick={state ? handleLogin : handleRegister}
                  >
                    {state === "name" && "Update"}
                    {state === "password" && "Change"}
                  </Button>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </div>
    );
  };

  return (
    <React.Fragment>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0
            }
          }
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <div className="TypographyContainer">
          <Typography sx={{ fontFamily: "inherit" }}>theharism</Typography>
          <IconButton size={"small"} onClick={() => setState("name")}>
            <EditIcon fontSize="small" />
          </IconButton>
        </div>

        <MenuItem
          sx={{ fontFamily: "inherit" }}
          onClick={() => setState("password")}
        >
          <ListItemIcon>
            <LockResetRoundedIcon fontSize="small" />
          </ListItemIcon>
          Change Password
        </MenuItem>
        <MenuItem sx={{ fontFamily: "inherit" }} onClick={signout}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
      {state === "name" && <Modal />}
      {state === "password" && <Modal />}
    </React.Fragment>
  );
}
