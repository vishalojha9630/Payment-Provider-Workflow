import React from "react";
import { IconButton } from "@chakra-ui/react";
import { X } from "react-bootstrap-icons";
import {
  BezierEdge,
  EdgeLabelRenderer,
  EdgeProps,
  getBezierPath,
  useReactFlow,
} from "reactflow";

const CustomEdge = (props: EdgeProps) => {
  const {
    id,
    sourceX,
    sourceY,
    targetX,
    targetY,
    sourcePosition,
    targetPosition,
  } = props;

  const { setEdges } = useReactFlow();

  const [labelX, labelY] = getBezierPath({
    sourceX,
    sourceY,
    targetX,
    targetY,
    sourcePosition,
    targetPosition,
  });

  return (
    <>
      <BezierEdge {...props} />
      <EdgeLabelRenderer>
        <IconButton
          aria-label="Delete Edge"
          pos="absolute"
          icon={<X />}
          color="red"
          transform={`translate(-50%, -50%) translate(${labelX}px, ${labelY}px)`}
          pointerEvents="all"
          bg="transparent"
          size="small"
          onClick={() =>
            setEdges((prevEdges) => prevEdges.filter((edge) => edge.id !== id))
          }
        />
      </EdgeLabelRenderer>
    </>
  );
}

export default CustomEdge
