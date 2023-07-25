import { Grid } from "@mui/material";

import { ColectionCardProps, ColectionCard } from "./ColectionCard";

export interface ColectionsProps {
  colections: ColectionCardProps[];
}

export function ColectionList({ colections }: ColectionsProps) {
  return (
    <Grid container spacing={4} marginTop="80px" marginBottom="40px">
      {colections.map((colection) => (
        <Grid key={colection.id} item xs={12} md={4}>
          <ColectionCard {...colection} />
        </Grid>
      ))}
    </Grid>
  );
}
