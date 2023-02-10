<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Music Web</title>
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css"
    />
    <link
      href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="./assets/css/style.css" />
  </head>
  <body>
    <div class="container">
      <div class="wrapper">
        <div class="player">
          <div class="player__header">
            <div class="btn-intro">
              <i class="btn-icon fa-solid fa-chevron-down"></i>
            </div>
            <h3 class="heading">Now playing</h3>
            <div class="btn-icon playlist-bar">
              <i class="fa-solid fa-bars"></i>
            </div>
          </div>
          <div class="player__cd">
            <div class="player__cd-thumb"></div>
          </div>

          <div class="player__infor">
            <h3 class="song__name">Chắc Ai Đó Sẽ Về</h3>
            <p class="song__author">Sơn Tùng MTP</p>
          </div>

          <div class="player__progress">
            <div class="player__progress-bar"></div>
          </div>

          <div class="player__time">
            <span class="current"></span>
            <span class="duration"></span>
          </div>

          <audio id="audio" src=""></audio>

          <div class="player__controls">
            <div class="btn-icon btn-repeat">
              <i class="fa-solid fa-repeat"></i>
            </div>
            <div class="btn-icon btn-prev">
              <i class="fa-solid fa-backward-step"></i>
            </div>
            <div class="btn-icon btn-toggle-play">
              <i class="icon-play fa-solid fa-play"></i>
              <i class="icon-pause fa-solid fa-pause"></i>
            </div>

            <div class="btn-icon btn-next">
              <i class="fa-solid fa-forward-step"></i>
            </div>

            <div class="btn-icon btn-random">
              <i class="fa-solid fa-shuffle"></i>
            </div>
          </div>
        </div>

        <div class="playlist">
          <div class="playlist__currentSong">
            <div class="playlist__header">
              <div></div>
              <div class="playlist__heading">Playlist</div>
              <div class="playlist__close-btn">
                <i class="btn-icon fa-solid fa-xmark"></i>
              </div>
            </div>
            <div class="currentSong">
              <div class="currentSong-img">
                <img src="./assets/img/chacaidoseve.jpg" alt="" />
              </div>
              <div class="currentSong__infor">
                <p class="currentSong__infor-heading">
                  Album dành cho
                  <span class="user-name">Thanh</span>
                </p>
                <h3 class="currentSong__infor-name">Chắc Ai Đó Sẽ Về</h3>
                <p class="currentSong__infor-author">Sơn Tùng MTP</p>
                <div class="currentSong-favourite">
                  <i class="icon-no-tym fa-regular fa-heart"></i>
                  <i class="icon-tym fa-solid fa-heart"></i>
                </div>
              </div>
            </div>
            <div class="currentSong__controls">
              <div class="btn-icon btn-prev">
                <i class="fa-solid fa-backward-step"></i>
              </div>
              <div class="btn-icon btn-toggle-play">
                <i class="icon-play fa-solid fa-play"></i>
                <i class="icon-pause fa-solid fa-pause"></i>
              </div>

              <div class="btn-icon btn-next">
                <i class="fa-solid fa-forward-step"></i>
              </div>
            </div>
          </div>

          <div class="playlist__main"></div>
        </div>

        <div class="intro">
          <div class="intro__close-btn">
            <i class="btn-icon fa-solid fa-xmark"></i>
          </div>
          <div class="intro__heading">
            <h1>Chào cậu, mình là Pumn</h1>
          </div>
          <div class="intro__body">
            <p>
              Mình sẽ rất vui nếu như lúc nào cũng được thấy nụ cười trên gương
              mặt của cậu đó! <br />

              Hi vọng cậu cảm thấy thoải mái khi nghe nhạc ở đây vì người làm ra
              nó bằng cả tấm lòng đấy ^^
            </p>
            <img src="./assets/gif/Xinchao.gif" alt="123" />
          </div>
        </div>
      </div>
    </div>

    <script src="./main.js"></script>
  </body>
</html>
