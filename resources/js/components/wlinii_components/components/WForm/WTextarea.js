import Vue from "vue";

Vue.component("w-textarea", {
  data: () => ({
    onFocus: false,
    errorMessage: null
  }),

  props: {
    value: [String, Number],
    disabled: Boolean,
    tile: Boolean,
    dark: Boolean,
    placeholder: String,
    label: String,
    color: {
      type: String,
      default: "primary"
    },
    beforeIcon: String,
    afterIcon: String,
    rules: Array
  },

  template: `
        <div class="input-container">
            <div :class="inputGroupClass" :style="inputGroupStyle" >
                <w-icon v-if="beforeIcon" :icon="beforeIcon" class="before"></w-icon>
                <div class="input-label">
                    <textarea
                        :value="value"
                        @input="$emit('input', $event.target.value)"
                        @focus="onFocus = true"
                        @blur="onFocus = false; validate()"
                        :disabled="disabled"
                        :placeholder="placeholder"
                        :class="inputClass"
                    >
                    </textarea>
                    <label :style="labelStyle">{{ label }}</label>
                </div>
                <w-icon v-if="afterIcon" :icon="afterIcon" class="after"></w-icon>
            </div>
            <div class="error-input">{{ errorMessage }}</div>
        </div>
        
    `,

  computed: {
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

    inputGroupClass() {
      let inputGroupClass = "input-group textarea-group";
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
          group: `border: 2px solid ${this.$wlinii[this.color]}`,
          label: `color: ${this.$wlinii[this.color]}`
        };
      } else {
        return {
          group: `border: 2px solid ${this.color}`,
          label: `color: ${this.color}`
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
    }
  }
});
