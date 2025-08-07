import { Badge, Box, IconButton } from "@mui/material";
import { Page } from "../../atoms/Page/Page";
import { SuggestedAction } from "../../atoms/SuggestedAction/SuggestedAction";
import BulbActiveIcon from "../../../assets/bulb-active.svg";
import BulbIcon from "../../../assets/bulb.svg";
import { useEffect, useState } from "react";

export interface SuggestedActionsProps {
  expanded: boolean;
}

export const SuggestedActions: React.FC<SuggestedActionsProps> = ({
  expanded = false,
}) => {
  const [isExpended, setIsExpended] = useState(expanded);

  const handlIsExpended = () => {
    setIsExpended(!isExpended);
  };

   useEffect(() => {
      setIsExpended(expanded);
     
    }, [expanded]);

  return (
    <Box
      component="div"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        gap: "16px",
        maxWidth: "700px",
        overflowX: "auto",
        paddingBottom: "8px",
      }}
    >
      {!isExpended ? (
        <IconButton onClick={handlIsExpended}>
          <Badge
            color="error"
            variant="dot"
            sx={{
              ".MuiBadge-dot": {
                bgcolor: "#C85A15",
              },
            }}
          >
            <img src={BulbIcon} />
          </Badge>
        </IconButton>
      ) : (
        <IconButton onClick={handlIsExpended}>
          <img src={BulbActiveIcon} />
        </IconButton>
      )}

      <Page truncated={true} />

      {isExpended && (
        <>
          <SuggestedAction truncated={true} />
          <SuggestedAction truncated={true} />
        </>
      )}
    </Box>
  );
};
