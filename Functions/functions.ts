function createFunctionInJavaScript() {
  // function declaration
}

const createArrowFunctionInJavaScript = () => {
  // arrow function
}

function callFunctionInJavaScript() {
  createFunctionInJavaScript();
  createArrowFunctionInJavaScript();
}

function createFunctionInTypeScript(parameter1: string, parameter2: number): boolean {
  // function declaration with explicit parameter and return types
  return true;
}

function callFunctionInTypeScript() {
  const result = createFunctionInTypeScript("string parameter", 1);
  console.log(result);
}

function overloadFunctionInTypeScript(parameter: string): string;
function overloadFunctionInTypeScript(parameter: number): number;
function overloadFunctionInTypeScript(parameter: any): any {
  // overloaded function declaration
}

function callOverloadedFunctionInTypeScript() {
  overloadFunctionInTypeScript("string parameter");
  overloadFunctionInTypeScript(1);
}

