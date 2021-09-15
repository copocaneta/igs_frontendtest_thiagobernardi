# IGS Brasil Test by Thiago Bernardi

- This is the test I performed for IGS Brasil on September 15th 2021.

  ![Animated Gif with a screencast of final product](./igsteste.gif)

- The test was called `"IGS-Lobby"` and it read:

  > _"The IGS team is growing every month, and now we need to have the portfolio to show some
  > games and animation to target new clients. The art team make a desired mock up for this
  > interface. Well, It is needed to create the front-end server to build the portfolio."_

- The following screenshot was provided and also a zip file with the images I was supposed to use.

  ![The image I was provided with so I could work with](screenshot.png)

- I decided not to use Bootstrap for the sake of performance reason being: since this was a small User Interface app I thought simplicity would play a big role here and I went with simple plain HTML using **Flexbox** CSS and Pure JavaScript.

- For the slider at the center of the page I decided not to reivent the wheel and use [SwipperJS](<[https://](https://swiperjs.com/)>) which is a well built and awesome responsive Slider/Carousel.

- I used **ES6 Modules** and bundled/minified everything with **Parcel Bundler**:

  ```
  dist/background.35ffc79d.png               ⚠️  2.67 MB    141ms
  dist/main.69fff47e.js.map                   589.85 KB     62ms
  dist/main.69fff47e.js                       160.43 KB    5.71s
  dist/header.811904d3.png                    158.05 KB     99ms
  dist/box_help.bab8a313.png                  142.82 KB    229ms
  dist/jogo00.56efa959.png                    105.21 KB    689ms
  dist/icon_idle.9359dc0f.png                  60.77 KB    689ms
  dist/jogo04.e179dc99.png                     45.39 KB    153ms
  dist/jogo05.c622bd97.png                     42.41 KB    153ms
  dist/jogo02.c2bf9d54.png                     37.16 KB    154ms
  dist/jogo03.6c95fbce.png                     36.96 KB    154ms
  dist/main.38b7afa9.css.map                   35.92 KB      9ms
  dist/jogo01.09311db8.png                     33.48 KB    688ms
  dist/main.38b7afa9.css                       21.65 KB    5.17s
  dist/FrutigerLTStd-Black.68ca477b.woff       16.71 KB     96ms
  dist/help_idle.62883f23.png                  10.37 KB     97ms
  dist/logout_idle.11b5198d.png                10.31 KB    730ms
  dist/logout_pressed.e1c76b80.png              9.54 KB     95ms
  dist/help_pressed.5f0de54e.png                9.52 KB    345ms
  dist/arrow_right.4c3a198f.png                 9.22 KB    345ms
  dist/arrow_left.4987c212.png                   8.9 KB    345ms
  dist/eye_off_idle.9291071c.png                6.16 KB    730ms
  dist/eye_idle.92930a20.png                    5.96 KB    731ms
  dist/btn_exit_help_pressed.6df707b8.png       5.89 KB    205ms
  dist/btn_exit_help_on.dd39289f.png             5.6 KB    205ms
  dist/footer.87f190e3.png                      5.54 KB    688ms
  dist/index.html                               5.11 KB    786ms
  dist/eye_off_pressed.752cd825.png              4.6 KB    731ms
  dist/eye_pressed.dbf93bd2.png                 4.42 KB    730ms
  dist/barra_jackpot.c954f8c8.png               3.98 KB    688ms
  dist/pagination_off.14b16ca4.png              3.12 KB    163ms
  dist/pagination_on.4297cf58.png               2.17 KB    205ms
  ```

- [DOMPurify](https://www.npmjs.com/package/dompurify) was used to sanitize an HTML string that goes to on the Help Modal.

- The App has been Dockerized into a Nginx image running on port 80. In order to run it on port 8080 on your development enviroment you must run:

  ```sh
  docker run -d -p 8080:80 igs-lobby-thiagobernardi:v1
  ```

- The `Dockerfile` as well as a functional **Docker image** (named `igs-lobby-thiagobernardi.tar`) itself are provided at the root of this repo so you can evaluate.

- Thanks for the opportunity.

- This is how it turned out:

  ![Animated Gif with a screencast of final product](./igsteste.gif)

---

## The Stack I used:

- HTML5
- Flexbox CSS
- Vanilla JavaScript
- DOM Purify (to sanitize data)
- SwiperJS (for the slider/carousel)
- Docker

---
