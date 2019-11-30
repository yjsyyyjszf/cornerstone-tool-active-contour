import csTools from 'cornerstone-tools';

const BaseTool = csTools.importInternal("base/BaseTool");

class ActiveContourTool extends BaseTool {
  constructor(name = "ActiveContour") {
    super({
      name,
      supportedInteractionTypes: ["Mouse"]
    });
  }

  preMouseDownCallback(evt) {
    console.log("Hello cornerstoneTools!");
  }

  activeCallback(element) {
    console.log(`Hello world plugin activated`);
  }

  disabledCallback(element) {
    console.log(`Hello world plugin deactivated`);
  }
}

export default ActiveContourTool;
//# sourceMappingURL=index.js.map
