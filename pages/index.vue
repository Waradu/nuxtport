<template>
  <div class="index">
    <div class="construction">
      Temporary Portfolio<br />
      <div class="small">Site Under Construction</div>
    </div>
    <div class="main">
      <h1>Waradu</h1>
      <p class="desc">Developer and Designer</p>
      <NuxtLink to="/projects" class="projects_link">
        My Work
        <div class="arrow">&rarr;</div>
      </NuxtLink>
    </div>
    <div class="footer">
      <a target="_blank" href="https://github.com/waradu" class="link"
        >Github
        <div class="preview gh">
          <div class="img"></div>
        </div>
      </a>
      <a target="_blank" href="https://youtube.com/@waradu" class="link"
        >YouTube
        <div class="preview yt">
          <div class="img"></div>
        </div>
      </a>
      <a target="_blank" href="https://discord.gg/yG2zF7yDfk" class="link"
        >Discord
        <div class="preview dc">
          <div class="img"></div>
        </div>
      </a>
    </div>
  </div>
</template>

<style lang="scss">
@use "~/assets/styles/index.scss";
</style>

<script lang="ts" setup>
useHead({
  title: "Home",
  meta: [{ name: "theme-color", content: "#000000" }],
});

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
});
</script>
