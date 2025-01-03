import { useEffect } from "react";

const GoogleAd = ({ adSlot }) => {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      console.error("AdSense error:", e);
    }
  }, []);

  return (
    <div>
      <h3>Goodle ads bellow</h3>
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-9990751545100210"
        data-ad-slot="8045074224"
        // data-ad-slot={adSlot}
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>{" "}
    </div>
  );
};

export default GoogleAd;
