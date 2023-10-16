<script setup>
import WelcomeItem from "./WelcomeItem.vue";
import DocumentationIcon from "./icons/IconNote.vue";
import ToolingIcon from "./icons/IconMic.vue";
import EcosystemIcon from "./icons/IconHeart.vue";
import CommunityIcon from "./icons/IconStar.vue";
import SupportIcon from "./icons/IconAward.vue";
</script>

<template>
  <div class="d-flex align-center justify-around">
    <div class="item">
      <i>
        <DocumentationIcon />
      </i>
      <i>
        <ToolingIcon />
      </i>
      <i>
        <EcosystemIcon />
      </i>
      <i>
        <CommunityIcon />
      </i>
      <i>
        <SupportIcon />
      </i>
    </div>
    <WelcomeItem>
      <template #heading>Song: {{ title }}</template>
      <p>"{{ description }}"</p>

      <button class="red d-block" @click="onGenerateRandomQuote">
        Generate Quote
      </button>
    </WelcomeItem>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "",
      description: "",
      baseURL: "/api", // Use your proxy server's URL
    };
  },

  created() {
    this.onGenerateRandomQuote();
  },

  methods: {
    async onGenerateRandomQuote() {
      try {
        // const response = await fetch(`http://localhost:3000/get`, {
        const response = await fetch(`https://swiftquotes.vercel.app/get`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (response.ok) {
          const data = await response.json();
          // Handle the data or call a success function
          this.onSuccess(data);
        } else {
          // Handle error
          this.onError(response);
        }
      } catch (error) {
        // Handle network or other errors
        this.onError(error);
      }
    },

    onSuccess(data) {
      console.log(data);
      // Handle the successful response data
      this.title = data.song;
      this.description = data.quote;
    },
    onError(error) {
      // Handle errors
      console.error("Error:", error);
    },
  },
};
</script>


<style scoped>
p {
  text-align: center;
  font-size: 1.5rem;
}
.item {
  display: inline-flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.item > i {
  display: flex;
  place-items: center;
  place-content: center;
  color: var(--color-text);
  border: 1px solid var(--color-border);
  padding: 1rem;
  font-size: 1.5rem;
  border-radius: 10px;
  position: relative;
  margin-bottom: 2.1rem;
}

.item > i:not(:last-child):before {
  content: " ";
  border-left: 2px solid var(--color-border);
  position: absolute;
  bottom: -35px;
  height: calc(50% - 25px);
  height: 2.2rem;
}

.d-flex {
  display: flex;
}

.align-center {
  align-items: center;
}

.justify-around {
  justify-content: space-around;
}

.d-block {
  display: block;
}

button {
  border: 1px solid var(--color-border);
  border-radius: 8px;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  font-weight: 500;
  margin: 1rem auto;
  cursor: pointer;
}
</style>
