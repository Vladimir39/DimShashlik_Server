import express from "express";
import cors from "cors";
import TelegramApi from "node-telegram-bot-api";

const app = express();
app.use(express.json());
app.use(cors());

app.post("/", (req, res) => {
  console.log(req.body);

  let order = req.body.basketItem
    .map(
      (obj) =>
        `ШАУРМА - ${obj.name}
Всего ${obj.amount} ед. - стоимость ${obj.price}р. за ед.
*********************************`
    )
    .join("\n");

  const addressPoint =
    req.body.delivery.addressPoint == null
      ? ""
      : `Самовывоз - ${req.body.delivery.addressPoint}`;

  const address =
    req.body.delivery.address == ""
      ? ""
      : `Адрес - ${req.body.delivery.address}`;

  const token = "6461092074:AAEES5-rxqomN-wthF-1mRZh3-tgO-oqRpQ";
  const bot = new TelegramApi(token, { polling: false });
  const chatId = "1144477936";
  bot.sendMessage(
    chatId,
    `Номер заказа - 1
Данные по заказу:
${addressPoint}
${address}

Номер телефона - ${req.body.delivery.phone}
Доп. информация - ${req.body.delivery.addition}
Время доставки - ${req.body.delivery.time}

Блюда:
${order}
Сумма по заказу : ${req.body.price}.00р.`
  );
  res.send("ответ");
});

app.listen(4444, (err) => {
  if (err) {
    return console.log(err);
  }
  console.log("server ok");
});
