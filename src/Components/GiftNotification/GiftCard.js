import { Button, Paper } from "@mui/material";

const GiftCard = ({ gift, goToBookById, markAsRead }) => {
  return (
    <Paper
      style={{
        direction: "rtl",
        width: 280,
        alignSelf: "center",
        margin: 8,
        padding: 6,
      }}
      elevation={2}
    >
      کاربر
      <span style={{ fontWeight: "bold" }}>
        {" " + gift.sender.username + " "}
      </span>
      کتاب
      <span style={{ fontWeight: "bold" }}>{" " + gift.book.name + " "}</span>
      را به شما هدیه داده
      {gift.message != null &&
      gift.message != undefined &&
      gift.message != "" ? (
        <div style={{ direction: "rtl", display: "block" }}>
          پیام ارسالی
          {": " + gift.message}
        </div>
      ) : (
        <></>
      )}
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <Button
          onClick={() => {
            goToBookById(gift.book.id);
          }}
        >
          مشاهده کتاب
        </Button>
        <Button
          onClick={() => {
            markAsRead(gift.id);
          }}
        >
          متوجه شدم
        </Button>
      </div>
    </Paper>
  );
};

export default GiftCard;
