/*
1. Render song
3. Play / pause / seek
4. CD rotate
5. Next / Prev
6. Random
7. Next / Repaet when end
8. Active song
9. Scroll active song into view
10. Play song when click
*/

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const playList = $(".playlist__main");
const nameSong = $(".song__name");
const nameSinger = $(".song__author");
const cdThumb = $(".player__cd-thumb");
const audio = $("#audio");
const player = $(".player");
const playBtn = $(".btn-toggle-play");
const nextBtn = $(".btn-next");
const nextBtnCurrentSong = $(".currentSong__controls .btn-next");
const prevBtnCurrentSong = $(".currentSong__controls .btn-prev");
const prevBtn = $(".btn-prev");
const randomBtn = $(".btn-random");
const repeatBtn = $(".btn-repeat");
const progress = $(".player__progress-bar");
const progressWrapper = $(".player__progress");
const currentElement = $(".current");
const durationElement = $(".duration");
const currentSongName = $(".currentSong__infor-name");
const currentSongAuthor = $(".currentSong__infor-author");
const currentSongImg = $(".currentSong-img img");
const playBtnPlaylist = $(".playlist .btn-toggle-play");
const currentSongControl = $(".currentSong__controls");
const currentSongFavourite = $(".currentSong-favourite");
const playlistBtn = $(".playlist-bar");
const closeBtn = $(".playlist__close-btn");
const musicWaves = $(".waves_container");
const intro = $(".intro");
const introBtn = $(".btn-intro");
const closeIntroBtn = $(".intro__close-btn");
const app = {
  currentIndex: 0,
  isPlaying: false,
  isRandom: false,
  isRepeat: false,
  isFavourite: false,
  isShow: false,
  songs: [
    {
      name: "There Is No One At All",
      singer: "Sơn Tùng MTP",
      path: "./assets/music/There_s No One At All Another Version_ -.mp3",
      img: "./assets/img/thereisnooneatall.jpg",
    },
    {
      name: "3107-2",
      singer: "DuongG x NÂU x W/N",
      path: "./assets/music/3107 2 - Duongg Nau W n (NhacPro.net).mp3",
      img: "./assets/img/3107-2.jpg",
    },
    {
      name: "3107-3",
      singer: "DuongG x NÂU x W/N",
      path: "./assets/music/3107 3 - W n Nau Duongg Titie (NhacPro.net).mp3",
      img: "./assets/img/3107-3.jpg",
    },
    {
      name: "Ánh Sao Và Bầu Trời",
      singer: "T.R.I x Cá",
      path: "./assets/music/AnhSaoVaBauTroi-TRI-7085073.mp3",
      img: "./assets/img/anhsaovabautroi.jpg",
    },
    {
      name: "Chỉ Là Muốn Nói",
      singer: "Khải",
      path: "./assets/music/ChiLaMuonNoi1-Khai-6992852.mp3",
      img: "./assets/img/chilamuonnoi.jpg",
    },
    {
      name: "Chờ Đợi Có Đáng Sợ",
      singer: "ANDIEZ",
      path: "./assets/music/Cho Doi Co Dang So - Andiez.mp3",
      img: "./assets/img/chodoicodangso.jpg",
    },
    {
      name: "Chuyện Đôi Ta",
      singer: "Emcee L (Da LAB) ft Muộii",
      path: "./assets/music/ChuyenDoiTa-EmceeLDaLAB-7120974.mp3",
      img: "./assets/img/chuyendoita.jpg",
    },
    {
      name: "Đáp Án Cuối Cùng",
      singer: "Quân AP",
      path: "./assets/music/DapAnCuoiCung-QuanAP-7887096.mp3",
      img: "./assets/img/dapancuoicung.jpg",
    },
    {
      name: "Mãi Chẳng Thuộc Về Nhau",
      singer: "Bozitt",
      path: "./assets/music/MaiChangThuocVeNhau-Bozitt-6111345.mp3",
      img: "./assets/img/maichangthuocvenhau.jpg",
    },
    {
      name: "Những Gì Anh Nói",
      singer: "Bozitt",
      path: "./assets/music/NhungGiAnhNoi-Bozitt-6205653.mp3",
      img: "./assets/img/nhunggianhnoi.jpg",
    },
    {
      name: "Là Ai Mang Nắng Đi Xa",
      singer: "Yang",
      path: "./assets/music/LaAiMangNangDiXa-Yang-5818740.mp3",
      img: "./assets/img/laaimangnangdixa.jpg",
    },
    {
      name: "Tình Yêu Chậm Trễ",
      singer: "MONSTAR",
      path: "./assets/music/Tinh Yeu Cham Tre - Monstar.mp3",
      img: "./assets/img/tinhyeuchamtre.jpg",
    },
    {
      name: "Rồi Ta Sẽ Ngắm Pháo Hoa Cùng Nhau",
      singer: "O.lew",
      path: "./assets/music/RoiTaSeNgamPhaoHoaCungNhau-OlewVietNam-8485329.mp3",
      img: "./assets/img/roitasengamphaohoacungnhau.jpg",
    },
    {
      name: "Tự sự",
      singer: "Tự Sự ft. Thuận Nguyễn",
      path: "./assets/music/Tu Su Qua Ben Lam Chi OST_ - Orange.mp3",
      img: "./assets/img/Tusu.jpg",
    },
    {
      name: "Để tôi ôm em bằng giai điệu này",
      singer: "KAI ĐINH x MIN x GREY D",
      path: "./assets/music/DeToiOmEmBangGiaiDieuNay-KaiDinhMINGREYD-8416034.mp3",
      img: "./assets/img/Detoiomembanggiaidieunay.jpg",
    },
    {
      name: "Cơn mưa Sao Băng",
      singer: "Kha",
      path: "./assets/music/DoanDuongSaoBang-Kha-8200573.mp3",
      img: "./assets/img/doanduongsaobang.jpg",
    },
    {
      name: "Sick Enough To Die",
      singer: "MC Mong feat. Mellow",
      path: "./assets/music/Sick Enough To Die - MC Mong_ Mellow.mp3",
      img: "./assets/img/sick-enough-to-die.jpg",
    },
    {
      name: "When You Look At Me",
      singer: "Obito x Seachains ",
      path: "./assets/music/When You Look At Me - Seachains_ Obito_.mp3",
      img: "./assets/img/when-you-look-at-me-remix.jpg",
    },
    {
      name: "Anh Đánh Rơi Người Yêu Này",
      singer: "Andiez ft. AMEE",
      path: "./assets/music/AnhDanhRoiNguoiYeuNay-Andiez-7625350.mp3",
      img: "./assets/img/anhdanhroinguoiyeunay.jpg",
    },
    {
      name: "Bật Nhạc Lên",
      singer: "HIEUTHUHAI ft. Harmonie",
      path: "./assets/music/BatNhacLen1-HIEUTHUHAIHarmonie-6351919.mp3",
      img: "./assets/img/batnhaclen.jpg",
    },
    {
      name: "Mưa cứ rơi",
      singer: "MR.A X Wxrdie & Machiot",
      path: "./assets/music/Mưa-cứ-rơi.mp3",
      img: "./assets/img/mua-cu-roi.jpg",
    },
    {
      name: "Chilly Đi",
      singer: "CARA x GILL x BÙI CÔNG NAM",
      path: "./assets/music/Chilly-Di-Cukak-Remix-Cara-ft-Gill-Bùi-Cong-Nam.mp3",
      img: "./assets/img/chilly-đi.jpg",
    },
    {
      name: "Cứ Chill Thôi",
      singer: "Chillies ft Suni Hạ Linh & Rhymastic",
      path: "./assets/music/Cu Chill Thoi - Chillies_ Suni Ha Linh_.mp3",
      img: "./assets/img/cuchillthoi.jpg",
    },
    {
      name: "Em thích",
      singer: "SEAN X Lửa ",
      path: "./assets/music/Em Thich - Sean_ Lua.mp3",
      img: "./assets/img/emthich.jpg",
    },
    {
      name: "Em bé",
      singer: "AMEE x KARIK",
      path: "./assets/music/EmBe-AMEEKarik-6719970.mp3",
      img: "./assets/img/embe.jpg",
    },
    {
      name: "Mặt Mộc",
      singer: " Phạm Nguyên Ngọc x VAnh x Ân Nhi",
      path: "./assets/music/MatMocAcousticVersion-PhamNguyenNgocVanhBMZ-7827498.mp3",
      img: "./assets/img/matmoc.jpg",
    },
    {
      name: "Love me more",
      singer: "THE SHEEP",
      path: "./assets/music/LoveMeMore-TheSheep-6040474 (1).mp3",
      img: "./assets/img/Love-you-more.jpg",
    },
    {
      name: "Em là nhất",
      singer: "kis x Hoàng KayLee x Yahy",
      path: "./assets/music/EmLaNhatCukakRemix-kisHoangKayLeeYAHYCukak-7293462.mp3",
      img: "./assets/img/Thanh.jpg",
    },
  ],
  render: function () {
    var htmls = this.songs.map((song, index) => {
      return `
            <div class="playlist-item ${
              this.currentIndex === index ? "active" : ""
            }" data-index = ${index}>
                <div class="playlist-item__thumb" 
                    style="background-image: url('${song.img}')">
                </div>

                <div class="playlist-item__body">
                    <p class="playlist-item__name">${song.name}</p>
                    <p class="playlist-item__author">${song.singer}</p>
                </div>

                <span id="option" class="waves_container ${
                  index === app.currentIndex ? "show_wave" : ""
                }">
                    <span class="music_waves wave1" data-inde></span>
                    <span class="music_waves wave2"></span>
                    <span class="music_waves wave3"></span>
                    <span class="music_waves wave4"></span>
                </span>
            </div>
            `;
    });
    playList.innerHTML = htmls.join("");
  },
  scrollActiveSong: function () {
    setTimeout(() => {
      $(".playlist-item.active").scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
    }, 500);
  },
  defindeProperties: function () {
    Object.defineProperty(this, "currentSong", {
      get: function () {
        return this.songs[this.currentIndex];
      },
    });
  },
  handleEvents: function () {
    // Xử lý cd quay
    const cdThumbAnimate = cdThumb.animate([{ transform: "rotate(360deg)" }], {
      duration: 10000,
      iterations: Infinity,
    });
    cdThumbAnimate.pause();

    // Xử lý play pause
    playBtn.onclick = function () {
      if (app.isPlaying) {
        audio.pause();
      } else {
        audio.play();
      }
    };
    playBtnPlaylist.onclick = function () {
      if (app.isPlaying) {
        audio.pause();
      } else {
        audio.play();
      }
    };
    audio.onplay = function () {
      app.isPlaying = true;
      player.classList.add("playing");
      currentSongControl.classList.add("playing");
      cdThumbAnimate.play();
    };
    audio.onpause = function () {
      app.isPlaying = false;
      player.classList.remove("playing");
      currentSongControl.classList.remove("playing");
      cdThumbAnimate.pause();
    };

    // Xử lý next, prev song
    nextBtn.onclick = function () {
      if (app.isRandom) {
        app.randomSong();
      } else {
        app.nextSong();
      }
      audio.play();
      app.activeSong();
      app.scrollActiveSong();
    };
    nextBtnCurrentSong.onclick = function () {
      if (app.isRandom) {
        app.randomSong();
      } else {
        app.nextSong();
      }
      audio.play();
      app.activeSong();
      app.scrollActiveSong();
    };
    prevBtn.onclick = function () {
      if (app.isRandom) {
        app.randomSong();
      } else {
        app.prevSong();
      }
      audio.play();
      app.activeSong();
      app.scrollActiveSong();
    };
    prevBtnCurrentSong.onclick = function () {
      if (app.isRandom) {
        app.randomSong();
      } else {
        app.prevSong();
      }
      audio.play();
      app.activeSong();
      app.scrollActiveSong();
    };

    // Xử lý khi tiến độ bài hát thay đổi
    audio.ontimeupdate = function () {
      const progressWidth = (this.currentTime / this.duration) * 100;
      progress.style.width = progressWidth + "%";

      let currentMin = Math.floor(this.currentTime / 60);
      let currentSecond = Math.floor(this.currentTime % 60);

      if (currentSecond < 10) {
        currentSecond = "0" + currentSecond;
      }

      currentElement.innerText = currentMin + ":" + currentSecond;
    };

    // Xử lý thời gian bài hát
    audio.onloadeddata = function () {
      let durationMin = Math.floor(this.duration / 60);
      let durationSecond = Math.floor(this.duration - durationMin * 60);

      durationElement.innerText = durationMin + ":" + durationSecond;
    };

    // Xử lý tua bài hát
    progressWrapper.onclick = function (e) {
      const progressWidth = this.offsetWidth;
      const progressEvent = e.offsetX;

      audio.currentTime = (progressEvent / progressWidth) * audio.duration;
    };

    // Xử lý random
    randomBtn.onclick = function () {
      app.isRandom = !app.isRandom;
      this.classList.toggle("active", app.isRandom);
    };
    repeatBtn.onclick = function () {
      app.isRepeat = !app.isRepeat;
      this.classList.toggle("active", app.isRepeat);
    };

    // Xử lý khi ended
    audio.onended = function () {
      if (app.isRepeat) {
        audio.play();
      } else {
        app.nextSong();
        audio.play();
        app.activeSong();
      }
    };
    // Xử lý bài hát yêu thích
    currentSongFavourite.onclick = function () {
      app.isFavourite = !app.isFavourite;
      this.classList.toggle("active", app.isFavourite);
    };

    // Xử lý show playlist
    playlistBtn.onclick = function () {
      $(".playlist").classList.add("show");
    };
    closeBtn.onclick = function () {
      $(".playlist").classList.remove("show");
    };

    // Xử lí khi cilck vào bài hát
    playList.onclick = function (e) {
      const songNode = e.target.closest(".playlist-item:not(.active)");

      if (songNode) {
        app.currentIndex = songNode.dataset.index;
        app.loadCurrentSong();
        audio.play();
        app.activeSong();
      }
    };
    // Xử lý intro
    introBtn.onclick = function () {
      intro.classList.add("show");
    };
    closeIntroBtn.onclick = function () {
      intro.classList.remove("show");
    };
  },
  nextSong: function () {
    this.currentIndex++;
    if (this.currentIndex === this.songs.length) {
      this.currentIndex = 0;
    }
    this.loadCurrentSong();
  },
  prevSong: function () {
    this.currentIndex--;
    if (this.currentIndex < 0) {
      this.currentIndex = this.songs.length - 1;
    }
    this.loadCurrentSong();
  },
  randomSong: function () {
    do {
      var newIndex = Math.floor(Math.random() * this.songs.length);
    } while (this.currentIndex === newIndex);
    this.currentIndex = newIndex;
    this.loadCurrentSong();
  },
  loadCurrentSong: function () {
    nameSong.textContent = this.currentSong.name;
    currentSongName.textContent = this.currentSong.name;
    nameSinger.textContent = this.currentSong.singer;
    currentSongAuthor.textContent = this.currentSong.singer;
    currentSongImg.src = this.currentSong.img;
    cdThumb.style.backgroundImage = `url("${this.currentSong.img}")`;
    audio.src = this.currentSong.path;
  },
  activeSong: function () {
    $(".playlist-item.active").classList.remove("active");
    const fullSong = $$(".playlist-item");
    fullSong[this.currentIndex].classList.add("active");

    $(".waves_container.show_wave").classList.remove("show_wave");
    $$(".waves_container")[this.currentIndex].classList.add("show_wave");
  },

  start: function () {
    // Định nghĩa thuộc tính cho object
    this.defindeProperties();
    // Xử lý các sự kiện
    this.handleEvents();

    // Đưa bài hát đầu tiên vào UI
    this.loadCurrentSong();
    // Render Playlist
    this.render();
  },
};

app.start();
