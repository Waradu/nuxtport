<template>
  <div class="card-wrapper" v-on:click="full = full ? false : true" :class="{ full: false }">
    <div class="card">
      <NuxtImg :src="'/projects/' + image" alt="" v-on:click="full = full ? true : false" loading="lazy" />
      <div class="text">
        <div class="title">{{ title }}</div>
        <div class="description">{{ description }}</div>
      </div>
    </div>
    <NuxtLink v-if="haslink == '1'" class="link" :to="link">Go to {{ title }} <div class="arrow" style="rotate: -45deg;">
        &rarr;</div>
    </NuxtLink>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    image: String,
    title: String,
    description: String,
    link: String,
    haslink: String
  },
  data() {
    return {
      full: false
    }
  }
}
</script>

<style lang="scss">
.card-wrapper {
  width: 100%;
  background-color: #1c1c1c;
  border: 2px solid #2e2e2e;
  border-radius: 17px;
  margin-bottom: 10px;
  padding: 5px;
  break-inside: avoid;
  display: flex;
  flex-direction: column;
  gap: 5px;

  &.full {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: none;
    border-radius: 0;
    padding: 15%;
    padding-inline: 30%;
    z-index: 9999;
    justify-content: center;
    align-items: center;
  }

  .card {
    overflow: hidden;
    border-radius: 12px;
    position: relative;
    transform: translateZ(0px);
    overflow: hidden;
    display: flex;

    img {
      width: 100%;
      z-index: 0;
      object-fit: cover;
    }

    .text {
      position: absolute;
      bottom: 10px;
      left: 15px;
      display: flex;
      flex-direction: column;
      gap: 5px;
    }

    .title {
      letter-spacing: 1px;
      font-weight: 500;
      font-size: 18px;
      z-index: 1;
    }

    .description {
      font-size: 12px;
      font-weight: 300;
      letter-spacing: .5px;
      color: #ffffffaa;
      z-index: 1;
    }

    &::after {
      pointer-events: none;
      display: block;
      content: "";
      z-index: 0;
      background-image: linear-gradient(to bottom, transparent 50%, #00000090);
      height: 100%;
      width: 100%;
      position: absolute;
    }
  }

  .link {
    width: 100%;
    display: flex;
    background-color: #272727;
    border-radius: 12px;
    justify-content: center;
    align-items: center;
    padding: 12px;
    font-size: 16px;
    text-decoration: none;
    color: white;
    cursor: pointer;
    gap: 5px;
    transition: .2s ease-in-out;
    font-weight: 300;

    &:hover {
      gap: 10px;
      background-color: #2c2c2c;
    }
  }
}

@media (orientation: portrait) {
  .card-wrapper {
    &.full {
      padding: 30%;
      padding-inline: 15%;
    }
  }
}
</style>