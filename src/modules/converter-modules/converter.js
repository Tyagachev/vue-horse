export default {
  state: {
    width_mm: '',
    height_mm: '',
    width_px: '',
    height_px: '',
    width_dpi: '',
    height_dpi: '',
    result_width_dpi: '',
    result_height_dpi: '',
    result_width_pxdpi: '',
    result_height_pxdpi: '',
    result_width_mm: '',
    result_height_mm: '',
    result_width_pxmm: '',
    result_height_pxmm: '',
    box_visible: false,
    dpiConst: 300,
    inch: 25.4,
    points: 72,
    staticPx: 0.264,
    t2: 2.83
  },

  mutations: {
    CALC_MM_TO_DPI: (state) => {
      state.result_width_dpi = Math.floor(((state.width_mm * state.points) / state.inch) * 100) / 100
      state.result_height_dpi = Math.floor(((state.height_mm * state.points) / state.inch) * 100) / 100

      if (state.result_width_dpi && state.result_height_dpi > 1) {
        state.box_visible = true
      }
    },

    CALC_PX_TO_DPI: (state) => {
      state.result_width_pxmm = (state.width_px * state.inch) / state.dpiConst
      state.result_height_pxmm = (state.height_px * state.inch) / state.dpiConst
      state.result_width_pxdpi = Math.floor(((state.result_width_pxmm * state.points) / state.inch) * 100) / 100
      state.result_height_pxdpi = Math.floor(((state.result_height_pxmm * state.points) / state.inch) * 100) / 100

      if (state.result_width_pxdpi && state.result_height_pxdpi > 1) {
        state.box_visible = true
      }
    },

    CALC_DPI_TO_MM: (state) => {
      state.result_width_mm = Math.floor((state.width_dpi / state.t2) * 1) / 1
      state.result_height_mm = Math.floor((state.height_dpi / state.t2) * 1) / 1

      if (state.result_width_mm && state.result_height_mm > 1) {
        state.box_visible = true
      }
    }
  }
}
