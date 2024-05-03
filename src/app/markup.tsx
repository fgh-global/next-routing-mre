import { TPageData } from "./data";

export default function (pageData: TPageData[string]): React.ReactElement {
  try {
    const markup = (
      <>
        <h2>{pageData.title}</h2>
        <br />
        <br />
        <div dangerouslySetInnerHTML={{ __html: pageData.body }} />
      </>
    );

    return markup;
  } catch (err) {
    return (
      <h2>
        <div>An Error Occurred</div>
        {JSON.stringify(err)}
      </h2>
    );
  }
}
