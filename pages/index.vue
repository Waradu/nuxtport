<template>
  <div class="index">
    <div class="main">
      <h1>Waradu</h1>
      <p class="desc">Developer and Designer</p>
      <NuxtLink to="/projects" class="projects_link">
        My Work
        <div class="arrow">&rarr;</div>
      </NuxtLink>
    </div>
    <div class="footer">
      <a target="_blank" href="https://github.com/waradu" class="link">Github
        <div class="preview gh">
          <div class="img"></div>
        </div>
      </a>
      <a target="_blank" href="https://youtube.com/@waradu" class="link">YouTube
        <div class="preview yt">
          <div class="img"></div>
        </div>
      </a>
      <a target="_blank" href="https://discord.gg/yG2zF7yDfk" class="link">Discord
        <div class="preview dc">
          <div class="img"></div>
        </div>
      </a>
    </div>
  </div>
</template>

<style lang="scss">
.index {
  width: 100%;
  height: 100%;
  background-color: black;
  color: white;
  font-family: Inter;
  overflow: hidden;
  display: flex;
  justify-content: center;
  user-select: none;

  .main {
    width: 100%;
    height: 100%;
    position: relative;
    filter: brightness(100%);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 10px;

    --cursor-x: center;
    --cursor-y: center;

    h1,
    .desc,
    .projects_link {
      z-index: 1;
    }

    h1 {
      font-size: 60px;
      letter-spacing: 2px;
    }

    .desc {
      color: #fff;
      opacity: 0.7;
      font-size: 20px;
      margin-bottom: 5px;
      font-weight: 300;
    }

    .projects_link {
      cursor: pointer;
      padding: 8px;
      padding-inline: 20px;
      background-color: #3f343aaa;
      border-radius: 10px;
      display: flex;
      gap: 10px;
      transition: .2s;
      color: white;
      text-decoration: none;

      &:hover {
        gap: 20px;
      }
    }

    &::before {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;

      background-image: url(~/assets/img/bg.jpg);
      background-size: cover;
      z-index: -1;
      -webkit-filter: saturate(150%);
      filter: saturate(150%);
      opacity: 0.7;

      -webkit-mask-image: url(~/assets/img/grid.svg), url(~/assets/img/grid.svg), url(~/assets/img/grid.svg), url(~/assets/img/grid.svg), url(~/assets/img/grid.svg), url(~/assets/img/grid.svg);
      mask-image: url(~/assets/img/grid.svg), url(~/assets/img/grid.svg), url(~/assets/img/grid.svg), url(~/assets/img/grid.svg), url(~/assets/img/grid.svg), url(~/assets/img/grid.svg);

      -webkit-mask-position: 50% 50%;
      mask-position: 50% 50%;

      -webkit-mask-repeat: repeat, repeat, repeat, repeat, repeat, repeat;
      mask-repeat: repeat, repeat, repeat, repeat, repeat, repeat;
    }

    &::after {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;

      z-index: 0;

      background-image: radial-gradient(circle at var(--cursor-x) var(--cursor-y), transparent, black 70%);
    }
  }

  .footer {
    position: fixed;
    bottom: 5px;
    display: flex;
    gap: 10px;

    .link {
      color: lightgray;
      text-decoration: none;
      font-size: 14px;
      font-weight: 200;
      letter-spacing: 1px;
      position: relative;
      padding: 10px;
      padding-inline: 20px;

      .preview {
        display: flex;
        width: 250px;
        aspect-ratio: 16 / 9;
        transform-origin: center bottom;
        scale: .8 0;
        transition: .2s ease-in-out;
        border-radius: 10px;
        background: #ffffffaa;
        border: 2px solid #ffffffcc;
        position: absolute;
        left: 50%;
        translate: -50% 20px;
        opacity: 0;
        bottom: 40px;
        pointer-events: none;

        .img {
          width: 100%;
          height: 100%;
          background-size: 100%;
          border-radius: 5px;
          margin: 5px;
          opacity: .9;
          box-shadow: 0 0 5px #000;
        }
      }

      .gh>.img {
        background-image: url("~/assets/img/gh.jpg");
      }

      .yt>.img {
        background-image: url("~/assets/img/yt.jpg");
      }

      .dc>.img {
        background-image: url("~/assets/img/dc.jpg");
      }

      &:hover {
        color: white;

        .preview {
          scale: 1 1;
          translate: -50% 0;
          opacity: 1;
        }
      }
    }
  }
}

@media (max-width: 500px) {
  .main {
    --cursor-x: center !important;
    --cursor-y: center !important;
  }

  .preview {
    display: none !important;
  }
}
</style>

<script lang="ts" setup>
useHead({
  title: "Home",
  meta: [
    { name: "theme-color", content: "#000000" }
  ]
})

onMounted(() => {
  const mainElement = document.querySelector<HTMLObjectElement>(".main");

  if (mainElement == null) return;

  mainElement.addEventListener("mousemove", (e: MouseEvent) => {
    const rect = mainElement.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const xPercent = (x / rect.width) * 100;
    const yPercent = (y / rect.height) * 100;

    mainElement.style.setProperty("--cursor-x", xPercent + "%");
    mainElement.style.setProperty("--cursor-y", yPercent + "%");
  });

  document.documentElement.style.backgroundColor = "#000000";
})
</script>