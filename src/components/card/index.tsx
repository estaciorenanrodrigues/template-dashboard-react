import { Card as MuiCard, CardContent, Typography } from "@mui/material";

type CardProps = {
  title: string;
  subtitle?: string | number;
  children?: React.ReactNode;
  color?: string;
  classTitle?: string;
  classSubtitle?: string;
  classContent?: string;
};

export const CardGraphics = ( { title, children, color, subtitle, classTitle, classSubtitle, classContent }: CardProps ) => { 
  return (
    <>
      <MuiCard  sx={{ width: "100%" }}>
        <CardContent className={`${color || "bg-white-500"} ${classContent || "bg-white-500"}`}>
          <Typography
            variant="inherit"
            className={`text-2xl font-bold text-left py-1 px-1 ${classTitle || "text-black"}`}
          >
            {title}
          </Typography>
          {subtitle && (
            <Typography
              variant="h5"
              className={`text-sm text-left py-1 px-1 ${classSubtitle || "text-black"}`}
            >
              {subtitle}
            </Typography>
          )}
          {children}
        </CardContent>
      </MuiCard>
    </>
  );
};
