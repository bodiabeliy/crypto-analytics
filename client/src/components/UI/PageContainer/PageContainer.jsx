import React, {} from "react";

const PageContainer = ({pageName, sectionName, children}) => {
  return (
    <>
      <main className={[pageName].join(' ')}>
        <section className={[sectionName].join(' ')}>
            {children}
        </section>
      </main>
    </>
  );
};

export default PageContainer;
