import { useState } from "react";
import { Box, Button, Container, TextField, Typography, styled } from "@mui/material";
import * as strings from "../assets/helpers/text.strings.json";
import { FormData } from "../assets/helpers/constats.helper";

interface Errors {
  avgMonthlyReach: boolean;
  convRate: boolean;
  subPrice: boolean;
  platformCommission: boolean;
}

const CustomTextField = styled(TextField)(({ theme }) => ({
  "& .MuiInputBase-root": {
    height: 56,
    [theme.breakpoints.down("sm")]: {
      height: 40,
    },
  },
}));

const EarningCalculator = () => {
  const [formData, setFormData] = useState<FormData>({
    avgMonthlyReach: "",
    convRate: "",
    subPrice: "",
    platformCommission: "",
  });

  const [estimatedRevenue, setEstimatedRevenue] = useState<number | null>(null);
  const [isCalculated, setIsCalculated] = useState(false);

  const [errors, setErrors] = useState<Errors>({
    avgMonthlyReach: false,
    convRate: false,
    subPrice: false,
    platformCommission: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const validateForm = () => {
    const newErrors = {
      avgMonthlyReach: formData.avgMonthlyReach === "",
      convRate: formData.convRate === "",
      subPrice: formData.subPrice === "",
      platformCommission: formData.platformCommission === "",
    };
    setErrors(newErrors);
    return !Object.values(newErrors).includes(true);
  };

  const calculateRevenue = () => {
    if (validateForm()) {
      const reach = parseFloat(formData.avgMonthlyReach);
      const conversionRate = parseFloat(formData.convRate) / 100;
      const price = parseFloat(formData.subPrice);
      const platformCommission = parseFloat(formData.platformCommission) / 100;

      if (
        !isNaN(reach) &&
        !isNaN(conversionRate) &&
        !isNaN(price) &&
        !isNaN(platformCommission)
      ) {
        const revenue = reach * conversionRate * price;
        const finalRevenue = revenue * (1 - platformCommission);
        setEstimatedRevenue(parseFloat(finalRevenue.toFixed(2)));
      } else {
        setEstimatedRevenue(null);
      }
      setIsCalculated(true);
    } else {
      setEstimatedRevenue(null);
      setIsCalculated(false);
    }
  };

  return (
    <Container
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        flexDirection: 'column',
      }}
    >
      <Box
        component="form"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          maxWidth: 500,
          width: '100%',
        }}
      >
        <Typography variant="h6">{strings.avgMonthlyReach}</Typography>
        <CustomTextField
          required
          placeholder="2000?"
          id="avgMonthlyReach"
          variant="outlined"
          value={formData.avgMonthlyReach}
          onChange={handleChange}
          type="number"
          error={errors.avgMonthlyReach}
          helperText={errors.avgMonthlyReach ? strings.reqError : ""}
        />

        <Typography variant="h6">{strings.convRate}</Typography>
        <CustomTextField
          required
          placeholder="2?"
          id="convRate"
          variant="outlined"
          value={formData.convRate}
          onChange={handleChange}
          type="number"
          error={errors.convRate}
          helperText={errors.convRate ? strings.reqError : ""}
          sx={{ textAlign: 'center' }}
        />

        <Typography variant="h6">{strings.subPrice}</Typography>
        <CustomTextField
          required
          placeholder="10?"
          id="subPrice"
          variant="outlined"
          value={formData.subPrice}
          onChange={handleChange}
          type="number"
          error={errors.subPrice}
          helperText={errors.subPrice ? strings.reqError : ""}
          sx={{ textAlign: 'center' }}
        />

        <Typography variant="h6">{strings.platformCommision}</Typography>
        <CustomTextField
          required
          id="platformCommission"
          placeholder="20?"
          variant="outlined"
          value={formData.platformCommission}
          onChange={handleChange}
          type="number"
          error={errors.platformCommission}
          helperText={errors.platformCommission ? strings.reqError : ""}
          sx={{ textAlign: 'center' }}
        />

        <Button
          variant="contained"
          sx={{ my: 2 }}
          onClick={() => calculateRevenue()}
        >
          <Typography sx={{ m: 0.5, fontWeight: "bold" }}>
            {strings.calcBtn}
          </Typography>
        </Button>
      </Box>

      <Box sx={{ mt: 4 }}>
        <Typography>
          {isCalculated && strings.aproxRev}{" "}
        </Typography>
        <Typography variant="h3" sx={{ fontWeight: 'bold', mt: 4 }}>
          {estimatedRevenue !== null ? `$${estimatedRevenue}` : ""}
        </Typography>
      </Box>
    </Container>
  );
};

export default EarningCalculator;
