import React from "react";

export const Card = ({ children }) => (
  <div className="border rounded shadow p-4 bg-white">{children}</div>
);

export const CardHeader = ({ children }) => (
  <div className="mb-4">{children}</div>
);

export const CardContent = ({ children }) => (
  <div className="mb-4">{children}</div>
);

export const CardFooter = ({ children }) => (
  <div className="mt-4">{children}</div>
);

export const CardTitle = ({ children }) => (
  <h2 className="text-lg font-bold">{children}</h2>
);

export const CardDescription = ({ children }) => (
  <p className="text-sm text-gray-500">{children}</p>
);
