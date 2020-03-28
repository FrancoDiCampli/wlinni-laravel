import Vue from "vue";
import anime, { set } from "animejs";

Vue.component("w-select", {
  data: () => ({
    onFocus: false,
    errorMessage: null,
    showOptions: false
  }),

  props: {
    value: [String, Number],
    disabled: Boolean,
    tile: Boolean,
    dark: Boolean,
    label: String,
    color: {
      type: String,
      default: "primary"
    },
    beforeIcon: String,
    afterIcon: String,
    options: {
      type: Array,
      required: true
    },
    rules: Array
  },

  template: `
        <div class="input-container">
            <div :class="inputGroupClass" :style="inputGroupStyle" @click="showOptions = !showOptions">
                <w-icon v-if="beforeIcon" :icon="beforeIcon" class="before"></w-icon>
                <div class="input-label">
                    <input
                        disabled
                        :value="selectOption"
                        @input="$emit('input', $event.target.value)"
                        :class="inputClass"
                    />
                    <label :style="labelStyle">{{ label }}</label>
                </div>
                <div class="icon select-icon">
                    <img :src="iconURL" ref="selectIcon" />
                </div>
                <w-icon v-if="afterIcon" :icon="afterIcon" class="after"></w-icon>
            </div>
            <transition @enter="enterOptions" @leave="leaveOptions">
                <div 
                    class="select-options" 
                    :class="tile ? 'tile' : ''" ref="selectOptions" 
                    :style="selectOptionsStyle"
                    v-if="showOptions"
                >
                    <div 
                        class="opt" 
                        v-for="(opt, i) in options" 
                        :key="i" 
                        @click="selectOption = opt; showOptions = !showOptions"
                    >{{ opt }}</div>
                </div>
            </transition>
            <div class="error-input">{{ errorMessage }}</div>
        </div>
    `,

  computed: {
    selectOption: {
      get() {
        return this.value;
      },
      set(newValue) {
        this.$emit("input", newValue);
      }
    },

    iconURL() {
      return require("../../iconos/arrow-down.png");
    },

    inputGroupStyle() {
      if (this.errorMessage) {
        return `border: 2px solid ${this.$wlinii["error"]}`;
      } else {
        if (this.value || this.onFocus) {
          return this.setInputColor().group;
        }
        return "";
      }
    },

    labelStyle() {
      if (this.errorMessage) {
        return `color: ${this.$wlinii["error"]}`;
      } else {
        if (this.value || this.onFocus) {
          return this.setInputColor().label;
        }
        return "";
      }
    },

    selectOptionsStyle() {
      if (this.errorMessage) {
        return `border: 2px solid ${this.$wlinii["error"]}`;
      } else {
        if (this.value || this.onFocus) {
          return this.setInputColor().group;
        }
        return "";
      }
    },

    inputGroupClass() {
      let inputGroupClass = "select-group";
      this.disabled ? (inputGroupClass += " disabled") : "";
      this.tile ? (inputGroupClass += " tile") : "";
      this.dark ? (inputGroupClass += " dark") : "";
      return inputGroupClass;
    },

    inputClass() {
      let inputClass = "";
      this.value ? (inputClass += "active") : "";
      this.disabled ? (inputClass += " disabled") : "";
      return inputClass;
    }
  },

  methods: {
    setInputColor() {
      if (this.$wlinii[this.color]) {
        return {
          group: `border: 2px solid ${this.$wlinii[this.color]};`,
          label: `color: ${this.$wlinii[this.color]};`
        };
      } else {
        return {
          group: `border: 2px solid ${this.color};`,
          label: `color: ${this.color};`
        };
      }
    },

    validate() {
      if (this.rules) {
        for (let i = 0; i < this.rules.length; i++) {
          if (this.rules[i](this.value)) {
            this.errorMessage = this.rules[i](this.value);
            return;
          } else {
            this.errorMessage = null;
          }
        }
      }
    },

    enterOptions() {
      let optionsElement = this.$refs.selectOptions;
      let iconElement = this.$refs.selectIcon;
      anime({
        targets: optionsElement,
        scaleY: [0, 1],
        duration: 150,
        easing: "linear"
      });

      anime({
        targets: iconElement,
        rotate: ["0deg", "180deg"],
        duration: 150,
        easing: "linear"
      });
    },

    leaveOptions() {
      let iconElement = this.$refs.selectIcon;

      anime({
        targets: iconElement,
        rotate: ["180deg", "0deg"],
        duration: 150,
        easing: "linear"
      });
    }
  }
});
