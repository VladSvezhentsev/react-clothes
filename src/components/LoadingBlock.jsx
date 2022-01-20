import ContentLoader from "react-content-loader";

function LoadingBlock() {
   return (
      <ContentLoader
         speed={2}
         width={250}
         height={436}
         viewBox="0 0 250 436"
         backgroundColor="#f3f3f3"
         foregroundColor="#ecebeb"
      >
         <rect x="0" y="375" rx="6" ry="6" width="250" height="23" />
         <rect x="2" y="413" rx="6" ry="6" width="60" height="23" />
         <rect x="215" y="412" rx="0" ry="0" width="30" height="20" />
         <rect x="0" y="0" rx="10" ry="10" width="250" height="360" />
      </ContentLoader>
   );
}

export default LoadingBlock;
