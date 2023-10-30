const pertanyaan = document.getElementById("pertanyaan");
const jawaban = document.getElementById("jawaban");

let init = 0;

const botSay = (data) => {
  return [
    "hallo perkenalkan saya jek.bot, siapakah nama kamu?",
    `hallo ${data?.nama}, berapa usia kamu?`,
    `ohhhh ${data?.usia}, hobby kamu apa ya? `,
    `woww serius? kamu suka ${data?.hobi}? itu menakjubkan, apakah kamu memiliki pacar?`,
    `ohhhh ${data?.pacar} ☺ , baiklah kalau begitu, selamat beristirahat yahh..`,
  ];
};
pertanyaan.innerHTML = botSay()[0];

let usersData = [];

function botStart() {
  init++;
  if (init === 1) {
    botDelay({ nama: jawaban.value });
  } else if (init === 2) {
    botDelay({ usia: jawaban.value });
  } else if (init === 3) {
    botDelay({ hobi: jawaban.value });
  } else if (init === 4) {
    botDelay({ pacar: jawaban.value });
  } else if (init === 5) {
    finishing();
  } else {
    botEnd();
  }
}

function botDelay(jawabanUser) {
  console.log({ usersData: usersData });
  setTimeout(() => {
    pertanyaan.innerHTML = botSay(jawabanUser)[init];
  }, [500]);
  usersData.push(jawaban.value);
  jawaban.value = "";
}

function finishing() {
  pertanyaan.innerHTML = `thankyou yah ${usersData[0]} sudah meluangkan waktunya untuk menguji bot ini, kapan kapan kita ${usersData[2]} bareng yaa 😁`;
  jawaban.value = "love you jek🥰";
}

function botEnd() {
  window.location.reload();
}
