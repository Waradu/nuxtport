<template>
  <div class="projects">
    <div class="grid">
      <Card title="Portfolio" description="My Portfolio website" image="portfolio.jpg" link="/" haslink=1 />
      <Card title="Vleer.app" description="A free open source music player" image="vleer.webp" link="https://vleer.app"
        haslink=1 />
      <Card title="Eggcellent" description="A search bar with some neat functionality" image="egg.jpg"
        link="https://egg.waradu.dev" haslink=1 />
      <Card title="Epilogue.social" description="A new spezial social media platform" image="eds.jpg"
        link="https://epilogue.social" haslink=1 />
      <Card title="Skin Viewer" description="Modern skin viewer" image="skin.png"
        link="https://skin.waradu.dev/" haslink=1 />
      <Card title="r/placeCH" description="Developer and Mod at PlaceCH ready to manage to next r/place" image="placech.jpg"
        link="https://dsc.gg/placeCH" haslink=1 />
      <Card title="Watchtower" description="Fraud detection in posts and chats, like never seen before (In dev)"
        image="watchtower.jpg" haslink=0 />
      <Card title="Vanquor"
        description="If you get killed you can only respawn after your killer is killed (Stopped for now)" image="mc.jpg"
        haslink=0 />
      <Card title="Minigames" description="Fun little minigames (In early preview)" image="games.jpeg"
        link="https://games.waradu.dev" haslink=1 />
      <Card title="Mond" description="Mond widget for MacOS übersicht" image="mond.png"
        link="https://github.com/Waradu/Mond" haslink=1 />
      <Card title="iGetMusic" description="A python package to search music in itunes" image="igm.jpg"
        link="https://pypi.org/project/iGetMusic/" haslink=1 />
      <Card title="EDU" description="Manage all your homework, tests, grades and notes in one place (Stopped)"
        image="edu.jpg" haslink=0 />
      <Card title="Xtensions" description="Manage all your extensions with profiles and a clean UI" image="xtensions.jpg"
        link="https://xtensions.waradu.dev/" haslink=1 />
    </div>
  
    <div class="more">More comming soon ...</div>
  </div>
</template>

<script lang="ts" setup>
useHead({
  title: "Projects",
  meta: [
    { name: "theme-color", content: "#161616" }
  ]
})

onMounted(() => {
  document.documentElement.style.backgroundColor = "#161616";
})
</script>

<style lang="scss">
.projects {
  width: 100%;
  height: 100%;
}

.grid {
  columns: 3;
  padding: 10px;
  width: 100%;
  column-gap: 10px;
  overflow: auto;
}

@media (max-width: 1200px) {
  .grid {
    columns: 2;
  }
}

@media (max-width: 700px) {
  .grid {
    columns: 1;
  }
}

.more {
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 40px;
  padding-bottom: 60px;
  font-weight: 200;
  letter-spacing: 1px;
  color: #ffffff80;
  padding-inline: 0px;
}
</style>