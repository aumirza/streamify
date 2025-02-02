import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { InfoCard } from "../InfoCard";

describe("InfoCard", () => {
  it("renders correctly with value, caption, and icon", () => {
    render(
      <InfoCard value="123" caption="Test Caption" icon={<span>Icon</span>} />
    );

    expect(screen.getByTestId("ticker")).toBeInTheDocument();
    expect(screen.getByText("Test Caption")).toBeInTheDocument();
    expect(screen.getByText("Icon")).toBeInTheDocument();
  });

  it("renders correctly without icon", () => {
    render(<InfoCard value="456" caption="No Icon" />);

    expect(screen.getByTestId("ticker")).toBeInTheDocument();
    expect(screen.getByText("No Icon")).toBeInTheDocument();
  });
});
