import { useSelector } from "react-redux";
import { ImageList, ImageListItem } from "@mui/material";

export const ImagenGallery = () => {
  const { active } = useSelector((state) => state.journal);
  const { imagenUrls } = active;
  const arr = [];
  if (imagenUrls.length > 0) {
    for (const url of imagenUrls) {
      let obj = { title: url, img: url };
      arr.push(obj);
    }
  }

  return (
    <ImageList sx={{ width: "100%", height: 500 }} cols={4} rowHeight={164}>
      {arr.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
};
//
