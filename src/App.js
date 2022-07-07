import "./App.css";
import { useState } from "react";
function App() {
	const [link, setLink] = useState("");
	const downloadImg = (url, name) => {
		fetch(url)
			.then((res) => res.blob())
			.then((blob) => {
				const url = URL.createObjectURL(blob);
				const a = document.createElement("a");
				a.href = url;
				a.download = name;
				a.style.display = "none";
				document.body.appendChild(a);
				a.click();
				window.URL.revokeObjectURL(url);
			});
	};
	return (
		<div className="App">
			<div>
				<h1>Image</h1>
				<button>
					<a
						href="https://storage.googleapis.com/download/storage/v1/b/osool-docs/o/02530ad2688542e9972b271b999a8b2f.png?generation=1654766828826895&alt=media"
						download="example.png">
						Download
					</a>
				</button>
				<button>
					<a href="https://i.stack.imgur.com/43Na6.png" target="_blank">
						View
					</a>
				</button>
			</div>
			<div>
				<h1>PDF</h1>
				<button
					onClick={() =>
						downloadImg(
							"https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
							"example.pdf"
						)
					}>
					Download
				</button>
				<button>
					<a
						href="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
						target="_blank">
						View
					</a>
				</button>
			</div>
		</div>
	);
}

export default App;
