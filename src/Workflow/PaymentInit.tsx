import React from "react";
import { Box, Text } from "@chakra-ui/react";
import { NodeProps, Position } from "reactflow";
import CustomHandle from "./CustomHandle";

const PaymentInit = ({
  data: { amount },
}: NodeProps<{ amount: number }>) => {
  return (
    <Box bg="white" borderRadius="10px" border="1.5px solid #5e5eff">
      <Box bg="#410566" borderRadius="8px" p={1}>
        <Text fontSize="small" color="white">
          Payment Initialzed
        </Text>
      </Box>
      <Box p={2}>
        <Text fontSize="2xl" color="blue.600">
          ${amount}
        </Text>
      </Box>
      <CustomHandle type="source" position={Position.Right} />
    </Box>
  );
}
export default PaymentInit