import { useState } from "react";
import { pdfjs } from "react-pdf";

import { DocumentContainer, PageContainer, PageNum } from "./PdfViewer.styled";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
	"pdfjs-dist/build/pdf.worker.min.js",
	import.meta.url,
).toString();

const maxWidth = 900;

const PdfViewer = ({ pdfFile }) => {
	const [numPages, setNumPages] = useState();

	const onDocumentLoadSuccess = ({ numPages }) => {
		setNumPages(numPages);
	};

	return (
		<DocumentContainer
			file={pdfFile}
			onLoadSuccess={onDocumentLoadSuccess}
		>
			{Array.from(new Array(numPages), (el, index) => (
				<PageContainer
					key={`page_${index + 1}`}
					pageNumber={index + 1}
					renderTextLayer={false}
					renderAnnotationLayer={false}
					width={maxWidth}
				>
					<PageNum>
						Сторінка {index + 1} з {numPages}
					</PageNum>
				</PageContainer>
			))}
		</DocumentContainer>
	);
};

export { PdfViewer };
