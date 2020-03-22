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
    large: Boolean,
    small: Boolean,
    rounded: Boolean,
    outlined: Boolean
  },

  template: `
        <button :class="buttonClass" :style="buttonStyle">
            <slot></slot>
        </button>
    `,

  computed: {
    buttonClass() {
      let btnClass = "btn";

      this.dark ? (btnClass += " dark") : "";
      this.large ? (btnClass += " large") : "";
      this.small ? (btnClass += " small") : "";
      this.rounded ? (btnClass += " rounded") : "";
      this.outlined ? (btnClass += " outlined") : "";

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
