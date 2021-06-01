import { createStore } from 'vuex'

const store = createStore({
  state: {
    config: {
      rowHeight: 24,
      tooltip: true,
      pivot: false,
      toolPanel: false,
    }
  },
  mutations: {
    handleTooltip(state, tooltip) {
      state.config.tooltip = tooltip;
    },
    handlePivot(state, pivot) {
      state.config.pivot = pivot;
    },
    handleRowHeight(state, height) {
      state.config.rowHeight = height;
    },
    handleToolPanel(state, toolPanel) {
      state.config.toolPanel = toolPanel;
    }
  },
  actions: {
    handleChangeTooltip(context, tooltip) {
      context.commit('handleTooltip', tooltip);
    },
    handleChangePivot(context, pivot) {
      context.commit('handlePivot', pivot);
    },
    handleChangeRowHeight(context, height) {
      context.commit('handleRowHeight', height);
    },
    handleChangeToolPanel(context, toolPanel) {
      context.commit('handleToolPanel', toolPanel);
    }
  }
});

export default store;