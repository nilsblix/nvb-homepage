//import * as gui from "./nvb-imgui/src/gui/gui.ts";
//
//const enum UiAction {
//	placeholder,
//	inc,
//}
//
//const c = <gui.REND>gui.canvas.getContext("2d");
//const input_state = new gui.InputState(gui.canvas, 0, 0);
//
//const everything = document.getElementById("everything");
//
//if (everything == null)
//	throw new Error("everything hasn't loaded");
//
//everything.insertBefore(gui.canvas, everything.firstChild);
//
//
//const update = () => {
//
//	gui.updateCanvasSizing();
//
//	const stack = new gui.Stack<gui.N<UiAction>>();
//
//	const w = stack.makeWindow(c, input_state, {
//		window: UiAction.placeholder,
//		header: UiAction.placeholder,
//		resizeable: UiAction.placeholder,
//		close_btn: null,
//	}, {
//		title: "debug",
//		x: 0,
//		y: 700,
//		width: 300,
//		height: 400,
//	});
//
//	const w_width = gui.MBBox.calcWidth(w.bbox);
//
//	w.makeText(c, null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", w_width - 2 * gui.GlobalStyle.layout_commons.padding);
//
//	const ret = stack.requestAction(input_state);
//
//	switch (ret.action) {
//		case UiAction.inc:
//			break;
//	}
//
//	input_state.end();
//	c.clearRect(0, 0, c.canvas.width, c.canvas.height);
//	stack.stack_render(c, input_state);
//
//	requestAnimationFrame(update);
//}
//
//update();
