import { Font } from "@react-pdf/renderer";

Font.register({
  family: "Besley",
  fonts: [
    {
      src: "https://fonts.gstatic.com/s/besley/v22/PlIhFlO1MaNwaNGWUC92IOH_mtG4fbbBSdQ.ttf",
      fontWeight: 400,
    },
    {
      src: "https://fonts.gstatic.com/s/besley/v22/PlIhFlO1MaNwaNGWUC92IOH_mtG4fVHGSdQ.ttf",
      fontWeight: 700,
    },
  ],
});

Font.register({
  family: "Work Sans",
  fonts: [
    {
      src: "https://fonts.gstatic.com/s/worksans/v24/QGY_z_wNahGAdqQ43RhVcIgYT2Xz5u32K0nXNig.ttf",
      fontWeight: 400,
    },
    {
      src: "https://fonts.gstatic.com/s/worksans/v24/QGY9z_wNahGAdqQ43Rh_ebrnlwyYfEPxPoGU3msJow.ttf",
      fontWeight: 400,
      fontStyle: "italic",
    },
    {
      src: "https://fonts.gstatic.com/s/worksans/v24/QGY_z_wNahGAdqQ43RhVcIgYT2Xz5u32K3vXNig.ttf",
      fontWeight: 500,
    },
    {
      src: "https://fonts.gstatic.com/s/worksans/v24/QGY_z_wNahGAdqQ43RhVcIgYT2Xz5u32K5fQNig.ttf",
      fontWeight: 600,
    },
  ],
});

Font.registerHyphenationCallback((word) => [word]);
