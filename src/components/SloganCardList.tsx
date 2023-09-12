import { Grid } from "@mui/material";
import { sloganCardProps, SloganCard } from "./SloganCard";

export interface slogansProps {
  colections: sloganCardProps[];
}

export function ColectionList({ colections }: slogansProps) {
  return (
    <Grid container spacing={4} marginTop="80px" marginBottom="40px">
      {colections.map((colection) => (
        <Grid key={colection.id} item xs={12} md={4}>
          <SloganCard {...colection} />
        </Grid>
      ))}
    </Grid>
  );
}
