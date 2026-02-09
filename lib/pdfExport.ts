import { DayMenu } from "@/data/menu";
import jsPDF from "jspdf";

export function exportDayMenuToPDF(
  dayMenu: DayMenu,
  dayNumber: number,
  userName: string,
  waterIntake?: number | null,
) {
  const pdf = new jsPDF();
  const pageWidth = pdf.internal.pageSize.getWidth();
  const pageHeight = pdf.internal.pageSize.getHeight();
  const margin = 20;
  let yPosition = margin;

  // Helper function to check if we need a new page
  const checkNewPage = (requiredSpace: number = 10) => {
    if (yPosition + requiredSpace > pageHeight - margin) {
      pdf.addPage();
      yPosition = margin;
      return true;
    }
    return false;
  };

  // Helper function to add text with word wrap
  const addWrappedText = (
    text: string,
    x: number,
    y: number,
    maxWidth: number,
    lineHeight: number = 7,
  ) => {
    const lines = pdf.splitTextToSize(text, maxWidth);
    lines.forEach((line: string, index: number) => {
      pdf.text(line, x, y + index * lineHeight);
    });
    return lines.length * lineHeight;
  };

  // Add logo
  const logoPath = "/cropped-principal.png";
  const logoWidth = 50;
  const logoHeight = 15;
  const logoX = (pageWidth - logoWidth) / 2;
  try {
    pdf.addImage(logoPath, "PNG", logoX, yPosition, logoWidth, logoHeight);
    yPosition += logoHeight + 8;
  } catch (error) {
    console.error("Failed to add logo to PDF:", error);
  }

  // Title
  pdf.setFontSize(22);
  pdf.setFont("helvetica", "bold");
  pdf.setTextColor(255, 145, 26);
  yPosition += 8;
  pdf.text("Desafio dos 21 dias", pageWidth / 2, yPosition, {
    align: "center",
  });
  yPosition += 12;

  // Subtitle
  pdf.setFontSize(16);
  pdf.setTextColor(60, 60, 60);
  pdf.text(`Cardápio - Dia ${dayNumber}`, pageWidth / 2, yPosition, {
    align: "center",
  });
  yPosition += 8;

  // User name
  pdf.setFontSize(12);
  pdf.setFont("helvetica", "normal");
  pdf.setTextColor(100, 100, 100);
  pdf.text(`Olá, ${userName}!`, pageWidth / 2, yPosition, { align: "center" });
  yPosition += 12;

  // Water intake if available
  if (waterIntake) {
    checkNewPage(15);
    pdf.setFontSize(11);
    pdf.setTextColor(59, 130, 246); // Blue color
    pdf.text(
      `Meta de água: ${waterIntake}L por dia`,
      pageWidth / 2,
      yPosition,
      { align: "center" },
    );
    yPosition += 12;
  }

  // Separator line
  pdf.setDrawColor(255, 145, 26);
  pdf.setLineWidth(0.5);
  pdf.line(margin, yPosition, pageWidth - margin, yPosition);
  yPosition += 10;

  // Iterate through meals
  dayMenu.meals.forEach((meal, mealIndex) => {
    checkNewPage(20);

    // Meal name and total kcal
    pdf.setFontSize(14);
    pdf.setFont("helvetica", "bold");
    pdf.setTextColor(255, 145, 26);

    pdf.text(meal.name, margin, yPosition);

    // Total kcal aligned to the right
    pdf.setFont("helvetica", "bold");
    pdf.setTextColor(100, 100, 100);
    pdf.setFontSize(12);
    pdf.text(`${meal.totalKcal} kcal`, pageWidth - margin, yPosition, {
      align: "right",
    });
    yPosition += 8;

    // Options
    meal.options.forEach((option, optionIndex) => {
      checkNewPage(15);

      // Option header
      pdf.setFontSize(11);
      pdf.setFont("helvetica", "bold");
      pdf.setTextColor(80, 80, 80);
      pdf.text(`Opção ${optionIndex + 1}:`, margin + 5, yPosition);
      yPosition += 6;

      // Option items
      option.items.forEach((item) => {
        checkNewPage(8);

        pdf.setFontSize(10);
        pdf.setFont("helvetica", "normal");
        pdf.setTextColor(60, 60, 60);

        // Item text
        const itemText = `  • ${item.item}`;
        const textWidth = pageWidth - margin * 2 - 40;
        const itemHeight = addWrappedText(
          itemText,
          margin + 8,
          yPosition,
          textWidth,
        );

        // Kcal aligned to the right
        pdf.setTextColor(120, 120, 120);
        pdf.setFont("helvetica", "normal");
        pdf.text(`${item.kcal} kcal`, pageWidth - margin, yPosition, {
          align: "right",
        });

        yPosition += Math.max(itemHeight, 6);
      });

      yPosition += 4; // Space between options
    });

    // Space between meals
    yPosition += 6;

    // Add a light separator line between meals (except for the last one)
    if (mealIndex < dayMenu.meals.length - 1) {
      checkNewPage(5);
      pdf.setDrawColor(220, 220, 220);
      pdf.setLineWidth(0.3);
      pdf.line(margin + 10, yPosition, pageWidth - margin - 10, yPosition);
      yPosition += 8;
    }
  });

  // Footer
  const footerY = pageHeight - 15;
  pdf.setFontSize(9);
  pdf.setFont("helvetica", "italic");
  pdf.setTextColor(150, 150, 150);
  pdf.text(
    "Desafio dos 21 dias • Transforme sua saúde em três semanas",
    pageWidth / 2,
    footerY,
    { align: "center" },
  );

  // Add page numbers on all pages
  // const totalPages = (pdf.internal as any).getNumberOfPages();
  // for (let i = 1; i <= totalPages; i++) {
  //   pdf.setPage(i);
  //   pdf.setFontSize(9);
  //   pdf.setTextColor(150, 150, 150);
  //   pdf.text(`Página ${i} de ${totalPages}`, pageWidth - margin, footerY, {
  //     align: "right",
  //   });
  // }

  // Save the PDF
  pdf.save(`cardapio-dia-${dayNumber}.pdf`);
}
