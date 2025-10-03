export default function Plant({ level }) {
  const images = [
    "/images/seed.png",
    "/images/sprout.png",
    "/images/small.png",
    "/images/big.png",
  ];

  return <img src={images[level]} alt="plant" style={{ width: "100px" }} />;
}
