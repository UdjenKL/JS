const fnWithError = () => {
  throw new Error("Some error");
};
try {
  fnWithError();
} catch (error) {
    console.error(error);
  console.log("Continue...");
}
