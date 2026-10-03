"use client";

import { Database, FileText, Server, Terminal } from "lucide-react";
import { useState } from "react";

type Mode = "record" | "test";

const copy: Record<Mode, { left: string; leftSub: string; right: string; rightSub: string; caption: string }> = {
  record: {
    left: "You",
    leftSub: "curl requests",
    right: "MongoDB",
    rightSub: "real database",
    caption:
      "Keploy watches both hops. Each HTTP call becomes a test case, and each MongoDB reply becomes a mock.",
  },
  test: {
    left: "Keploy",
    leftSub: "replays test-*.yaml",
    right: "mocks.yaml",
    rightSub: "stands in for MongoDB",
    caption:
      "Keploy sends the saved requests itself, answers the database calls from the mocks, and compares each response with the recording.",
  },
};

/** The one picture of the tutorial: the same app, in record mode and in test mode. */
export function FlowDiagram() {
  const [mode, setMode] = useState<Mode>("record");
  const c = copy[mode];
  const LeftIcon = mode === "record" ? Terminal : FileText;
  const RightIcon = mode === "record" ? Database : FileText;

  return (
    <figure className="flow" data-mode={mode}>
      <div className="flow-switch" role="group" aria-label="Choose a mode to show">
        <button
          type="button"
          aria-pressed={mode === "record"}
          onClick={() => setMode("record")}
        >
          <span className="dot" aria-hidden /> keploy record
        </button>
        <button
          type="button"
          aria-pressed={mode === "test"}
          onClick={() => setMode("test")}
        >
          <span className="dot" aria-hidden /> keploy test
        </button>
      </div>

      <div className="flow-track">
        <div className="flow-node flow-node-swap" key={`l-${mode}`}>
          <LeftIcon size={20} aria-hidden />
          <strong>{c.left}</strong>
          <span>{c.leftSub}</span>
        </div>
        <div className="flow-wire" aria-hidden>
          <span>HTTP</span>
        </div>
        <div className="flow-node">
          <Server size={20} aria-hidden />
          <strong>Gin app</strong>
          <span>localhost:8080</span>
        </div>
        <div className="flow-wire" aria-hidden>
          <span>Mongo wire</span>
        </div>
        <div className="flow-node flow-node-swap" key={`r-${mode}`}>
          <RightIcon size={20} aria-hidden />
          <strong>{c.right}</strong>
          <span>{c.rightSub}</span>
        </div>
      </div>

      <figcaption aria-live="polite">{c.caption}</figcaption>
    </figure>
  );
}
