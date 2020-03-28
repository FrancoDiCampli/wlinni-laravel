import Vue from "vue";

// DEFINIR MAX HEIGHT

Vue.component("w-btn", {
  props: {
    dark: {
      type: Boolean,
      default: false
    },
    color: {
      type: String,
      default: "secondary"
    },
    icon: Boolean,
    large: Boolean,
    small: Boolean,
    fullwidth: Boolean,
    rounded: Boolean,
    outlined: Boolean
  },

  template: `
        <button :class="buttonClass" :style="buttonStyle" @click="$emit('click')">
            <slot></slot>
        </button>
    `,

  computed: {
    buttonClass() {
      let btnClass = "btn";

      if (this.icon) {
        btnClass += " icon";
        return btnClass;
      }

      this.dark ? (btnClass += " dark") : "";
      this.large ? (btnClass += " large") : "";
      this.small ? (btnClass += " small") : "";
      this.rounded ? (btnClass += " rounded") : "";
      this.outlined ? (btnClass += " outlined") : "";
      this.fullwidth ? (btnClass += " full-width") : "";

      return btnClass;
    },

    buttonStyle() {
      if (this.outlined) {
        if (this.$wlinii[this.color]) {
          return `border-color: ${this.$wlinii[this.color]}`;
        } else {
          return `border-color: ${this.color}`;
        }
      } else {
        if (this.$wlinii[this.color]) {
          return `background-color: ${this.$wlinii[this.color]}`;
        } else {
          return `background-color: ${this.color}`;
        }
      }
    }
  }
});
