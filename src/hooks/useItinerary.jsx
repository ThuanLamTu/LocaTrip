import { useState } from "react";
import { jsPDF } from "jspdf";

export const useItinerary = (destination) => {
  const [days, setDays] = useState(1);
  const [itinerary, setItinerary] = useState([]);
  const [newActivity, setNewActivity] = useState("");
  const [selectedDay, setSelectedDay] = useState(1);
  const [shareMessage, setShareMessage] = useState("");

  const handleDayChange = (e) => {
    const numDays = parseInt(e.target.value);
    setDays(numDays);
    setItinerary(Array.from({ length: numDays }, () => []));
  };

  const handleAddActivity = (e) => {
    e.preventDefault();
    if (newActivity.trim()) {
      const updatedItinerary = [...itinerary];
      updatedItinerary[selectedDay - 1] = [
        ...(updatedItinerary[selectedDay - 1] || []),
        newActivity,
      ];
      setItinerary(updatedItinerary);
      setNewActivity("");
    }
  };

  const handleRemoveActivity = (dayIndex, activityIndex) => {
    const updatedItinerary = [...itinerary];
    updatedItinerary[dayIndex] = updatedItinerary[dayIndex].filter(
      (_, i) => i !== activityIndex
    );
    setItinerary(updatedItinerary);
  };

  const handleShareItinerary = () => {
    if (itinerary.length === 0) {
      setShareMessage(
        "No itinerary to share. Please add some activities first!"
      );
      return;
    }

    let itineraryText = `Trip to ${destination.title}\n\n`;
    itinerary.forEach((dayActivities, dayIndex) => {
      itineraryText += `Day ${dayIndex + 1}:\n`;
      if (dayActivities.length > 0) {
        dayActivities.forEach((activity) => {
          itineraryText += `- ${activity}\n`;
        });
      } else {
        itineraryText += "- No activities planned.\n";
      }
      itineraryText += "\n";
    });

    navigator.clipboard
      .writeText(itineraryText)
      .then(() => {
        setShareMessage(
          "Itinerary copied to clipboard! You can paste it to share."
        );
      })
      .catch(() => {
        setShareMessage("Failed to copy itinerary. Please try again.");
      });

    setTimeout(() => setShareMessage(""), 3000);
  };

  const handleExportToPDF = () => {
    if (itinerary.length === 0) {
      setShareMessage(
        "No itinerary to export. Please add some activities first!"
      );
      return;
    }

    try {
      const doc = new jsPDF({
        orientation: "portrait",
        unit: "pt",
        format: "a4",
      });

      doc.setFont("times", "normal");
      doc.setFont("times", "bold");
      doc.setFont("times", "italic");

      const robotoBase64 = "AAEAAA...";
      if (robotoBase64 !== "AAEAAA...") {
        doc.addFileToVFS("Roboto-Regular.ttf", robotoBase64);
        doc.addFont("Roboto-Regular.ttf", "Roboto", "normal");
        doc.addFont("Roboto-Regular.ttf", "Roboto", "bold");
        doc.addFont("Roboto-Regular.ttf", "Roboto", "italic");
        doc.setFont("Roboto");
      }

      doc.setFillColor(10, 20, 40);
      doc.rect(0, 0, 595, 421, "F");
      doc.setFillColor(100, 130, 170);
      doc.rect(0, 421, 595, 421, "F");

      doc.setLineWidth(1);
      doc.setDrawColor(255, 215, 0);
      for (let i = 0; i < 10; i++) {
        doc.line(50 + i * 50, 600, 100 + i * 50, 550);
      }

      doc.setFont(robotoBase64 !== "AAEAAA..." ? "Roboto" : "times", "bold");
      doc.setFontSize(40);
      doc.setTextColor(255, 255, 255);
      const coverTitle = `TRIP TO ${destination.title.toUpperCase()}`;
      const coverTitleWidth = doc.getTextWidth(coverTitle);
      doc.text(coverTitle, (595 - coverTitleWidth) / 2, 300);

      doc.setFont(robotoBase64 !== "AAEAAA..." ? "Roboto" : "times", "italic");
      doc.setFontSize(20);
      doc.setTextColor(255, 255, 255, 0.8);
      const coverSubtitle = "A Journey of Discovery";
      const coverSubtitleWidth = doc.getTextWidth(coverSubtitle);
      doc.text(coverSubtitle, (595 - coverSubtitleWidth) / 2, 340);

      doc.addPage();

      doc.setFillColor(240, 240, 240);
      doc.rect(0, 0, 595, 842, "F");

      doc.setFont(robotoBase64 !== "AAEAAA..." ? "Roboto" : "times", "italic");
      doc.setFontSize(60);
      doc.setTextColor(200, 200, 200, 0.2);
      doc.text("Travel with Grok", 80, 400, { angle: 45 });

      doc.setFillColor(10, 20, 40);
      doc.rect(0, 0, 595, 60, "F");
      doc.setFont(robotoBase64 !== "AAEAAA..." ? "Roboto" : "times", "bold");
      doc.setFontSize(18);
      doc.setTextColor(255, 255, 255);
      const headerTitle = `TRIP TO ${destination.title.toUpperCase()}`;
      const headerTitleWidth = doc.getTextWidth(headerTitle);
      doc.text(headerTitle, (595 - headerTitleWidth) / 2, 40);

      doc.setFont(robotoBase64 !== "AAEAAA..." ? "Roboto" : "times", "italic");
      doc.setFontSize(14);
      doc.setTextColor(102, 102, 102);
      const subtitle = "A Journey of Discovery";
      const subtitleWidth = doc.getTextWidth(subtitle);
      doc.text(subtitle, (595 - subtitleWidth) / 2, 90);

      doc.setLineWidth(2);
      doc.setDrawColor(255, 215, 0);
      doc.line(40, 110, 555, 110);

      let yOffset = 140;

      itinerary.forEach((dayActivities, dayIndex) => {
        const activitiesHeight =
          dayActivities.length > 0 ? dayActivities.length * 25 + 15 : 35;
        const daySectionHeight = 45 + activitiesHeight;

        doc.setFillColor(255, 255, 255);
        doc.setDrawColor(180, 180, 180);
        doc.setLineWidth(0.5);
        doc.roundedRect(45, yOffset - 10, 515, daySectionHeight, 5, 5, "FD");
        doc.setFillColor(220, 230, 245);
        doc.setDrawColor(255, 215, 0);
        doc.roundedRect(40, yOffset - 15, 515, daySectionHeight, 5, 5, "FD");

        doc.setFont(robotoBase64 !== "AAEAAA..." ? "Roboto" : "times", "bold");
        doc.setFontSize(16);
        doc.setTextColor(10, 20, 40);
        doc.text(`Day ${dayIndex + 1}:`, 50, yOffset);
        yOffset += 30;

        doc.setFont(
          robotoBase64 !== "AAEAAA..." ? "Roboto" : "times",
          "normal"
        );
        doc.setFontSize(12);
        doc.setTextColor(51, 51, 51);

        if (dayActivities.length > 0) {
          dayActivities.forEach((activity, activityIndex) => {
            doc.setFont(
              robotoBase64 !== "AAEAAA..." ? "Roboto" : "times",
              "normal"
            );
            doc.setTextColor(51, 51, 51);
            doc.text("✦", 60, yOffset);
            doc.text(`${activity}`, 80, yOffset);
            yOffset += 25;

            if (activityIndex < dayActivities.length - 1) {
              doc.setLineWidth(0.5);
              doc.setDrawColor(255, 215, 0);
              doc.line(80, yOffset, 545, yOffset);
              yOffset += 15;
            }
          });
        } else {
          doc.setFont(
            robotoBase64 !== "AAEAAA..." ? "Roboto" : "times",
            "italic"
          );
          doc.setTextColor(102, 102, 102);
          doc.text("No activities planned for this day.", 60, yOffset);
          yOffset += 25;
        }

        yOffset += 35;

        if (yOffset > 650) {
          doc.addPage();
          doc.setFillColor(240, 240, 240);
          doc.rect(0, 0, 595, 842, "F");

          doc.setFont(
            robotoBase64 !== "AAEAAA..." ? "Roboto" : "times",
            "italic"
          );
          doc.setFontSize(60);
          doc.setTextColor(200, 200, 200, 0.2);
          doc.text("Travel with Grok", 80, 400, { angle: 45 });

          doc.setFillColor(10, 20, 40);
          doc.rect(0, 0, 595, 60, "F");
          doc.setFont(
            robotoBase64 !== "AAEAAA..." ? "Roboto" : "times",
            "bold"
          );
          doc.setFontSize(18);
          doc.setTextColor(255, 255, 255);
          doc.text(headerTitle, (595 - headerTitleWidth) / 2, 40);

          yOffset = 90;
        }
      });

      doc.setLineWidth(1);
      doc.setDrawColor(255, 215, 0);
      doc.line(40, 790, 555, 790);
      doc.setFont(robotoBase64 !== "AAEAAA..." ? "Roboto" : "times", "italic");
      doc.setFontSize(10);
      doc.setTextColor(102, 102, 102);
      const footerText = `Generated on ${new Date().toLocaleDateString()} by Grok ✧`;
      const footerWidth = doc.getTextWidth(footerText);
      doc.text(footerText, (595 - footerWidth) / 2, 810);

      doc.save(`${destination.title}_Itinerary.pdf`);

      const pdfBlob = doc.output("blob");
      const pdfUrl = URL.createObjectURL(pdfBlob);
      window.open(pdfUrl, "_blank");

      setShareMessage("Itinerary exported as PDF and opened in a new tab!");
      setTimeout(() => setShareMessage(""), 3000);
    } catch (error) {
      console.error("Error generating PDF:", error);
      setShareMessage("Failed to export PDF. Please try again.");
      setTimeout(() => setShareMessage(""), 3000);
    }
  };

  return {
    days,
    itinerary,
    newActivity,
    selectedDay,
    shareMessage,
    setNewActivity,
    setSelectedDay,
    handleDayChange,
    handleAddActivity,
    handleRemoveActivity,
    handleShareItinerary,
    handleExportToPDF,
  };
};
