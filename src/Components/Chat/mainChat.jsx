import React, { useEffect, useState } from "react";
import { baseUrl } from "../../Variable";
import axios from "axios";
import {
  Button,
  Paper,
  Divider,
  InputLabel,
  FormControl,
  Select,
  MenuItem,
  ListItemText,
  OutlinedInput,
} from "@mui/material";
import noPicture from "../../assets/Image/nopic.png";
import "./scrollbar.css";
import { Checkbox } from "material-ui-core";
import fakeres from "./fakeres";
import ReactLoading from "react-loading";

const MainChat = () => {
  const [loading, setLoading] = useState(true);
  const [groups, setGroups] = useState([]);
  const [selectedGroup, setSelectedGroup] = useState(undefined);
  const [categories, setCategories] = useState({});
  const [personName, setPersonName] = React.useState([]);

  console.log(personName);

  let token = "Token " + localStorage.getItem("token");

  useEffect(async () => {
    const res = await axios.get(baseUrl + "/groups/showall/", {
      headers: {
        "Content-Type": "application/json ",
        Authorization: token,
      },
    });

    //const res = { data: fakeres, status: 200 };

    if (res.status === 200) {
      setLoading(false);
      setGroups(res.data);
      var cats = {};
      for (var i = 0; i < res.data.length; i++) {
        if (res.data[i].category !== undefined)
          cats[res.data[i].category.id] = res.data[i].category;
      }
      setCategories(cats);
    }
  }, []);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(typeof value === "string" ? value.split(",") : value);
  };

  if (loading === true) {
    return (
      <div style={{ width: 700, padding:300 }}>
        <ReactLoading
          type="spinningBubbles"
          color={"#1565C0"}
          height={100}
          width={100}
          
        />
      </div>
    );
  }

  if (selectedGroup !== undefined) {
    const selectedGroupDetails = groups.filter((g) => {
      return g.id === selectedGroup;
    })[0];
    return (
      <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "row-reverse",
            height: 80,
            width: "100%",
            justifyContent: "space-between",
            background: "white",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row-reverse",
              margin: 12,
              alignItems: "center",
            }}
          >
            <img
              src={
                selectedGroupDetails.picture.includes("default")
                  ? noPicture
                  : selectedGroupDetails.picture
              }
              style={{ width: 60, height: 60 }}
            />

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-end",
                margin: 8,
              }}
            >
              <div
                style={{
                  fontSize: 16,
                  direction: "rtl",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {selectedGroupDetails.name}
              </div>
              <div
                style={{
                  fontSize: 14,
                  color: "gray",
                  direction: "rtl",
                }}
              >
                {selectedGroupDetails.bio}
              </div>
            </div>
          </div>

          <Button onClick={() => setSelectedGroup(undefined)}>بازگشت</Button>
        </div>

        <div style={{ flex: 1, textAlign: "center", paddingTop: 250 }}>
          پیامی وجود ندارد
        </div>
        <div style={{ width: "100%", background: "white", height: 50 }}>
          بخش ارسال پیام
        </div>
      </div>
    );
  }

  return (
    <div style={{ background: "#e0e0e0" }}>
      <div style={{ background: "#e0e0e0" }}>
        <FormControl style={{ width: "96%" }} sx={{ m: 1, width: "96%" }}>
          <Select
            labelId="demo-multiple-checkbox-label"
            id="demo-multiple-checkbox"
            multiple
            value={personName}
            onChange={handleChange}
            input={
              <OutlinedInput label="Tag" dir="rtl" style={{ width: "100%" }} />
            }
            renderValue={(selected) => selected.join(" , ")}
            MenuProps={{
              PaperProps: {
                style: {
                  maxHeight: 48 * 4.5 + 8,
                  width: 250,
                  direction: "rtl",
                },
              },
            }}
            dir="rtl"
            style={{ width: "100%" }}
          >
            {Object.values(categories).map((cat) => (
              <MenuItem
                dir="rtl"
                key={cat.id}
                style={{ paddingLeft: 8 }}
                value={cat.name}
              >
                <Checkbox checked={personName.indexOf(cat.name) > -1} />
                <ListItemText primary={cat.name} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        {groups
          .filter((gr) => {
            if (personName.length === 0) return true;
            if (personName.includes(gr.category.name)) return true;
            else return false;
          })
          .map((g) => {
            return (
              <Paper
                style={{ display: "flex", flexDirection: "column", margin: 12 }}
                key={g.id}
                elevation={2}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row-reverse",
                    margin: 12,
                    alignItems: "center",
                  }}
                >
                  <img
                    src={g.picture.includes("default") ? noPicture : g.picture}
                    style={{ width: 80, height: 80 }}
                  />

                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-end",
                      margin: 8,
                    }}
                  >
                    <div
                      style={{
                        fontSize: 18,
                        direction: "rtl",
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      {g.name}

                      <Button
                        onClick={() => {
                          setSelectedGroup(g.id);
                        }}
                      >
                        ورود به گروه
                      </Button>
                    </div>
                    <div
                      style={{
                        fontSize: 16,
                        color: "gray",
                        direction: "rtl",
                      }}
                    >
                      {g.bio}
                    </div>
                  </div>
                </div>

                <Divider />

                <div style={{ display: "flex", flexDirection: "row-reverse" }}>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      margin: 12,
                      alignItems: "center",
                    }}
                  >
                    <img
                      src={g.owner.profile.image}
                      style={{ width: 50, height: 50 }}
                    />
                    <div>{g.owner.username}</div>
                    <div style={{ fontSize: 12, color: "GrayText" }}>
                      {"(سازنده گروه)"}
                    </div>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row-reverse",
                      overflow: "auto",
                    }}
                  >
                    {g.users?.map((u) => {
                      return (
                        <div
                          key={u.id}
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            margin: 12,
                            alignItems: "center",
                          }}
                        >
                          <img
                            src={u.profile.image}
                            style={{ width: 50, height: 50 }}
                          />
                          <div>{u.username}</div>
                        </div>
                      );
                    })}
                    {g.users?.map((u) => {
                      return (
                        <div
                          key={u.id}
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            margin: 12,
                            alignItems: "center",
                          }}
                        >
                          <img
                            src={u.profile.image}
                            style={{ width: 50, height: 50 }}
                          />
                          <div>{u.username}</div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </Paper>
            );
          })}
      </div>
    </div>
  );
};

export default MainChat;
