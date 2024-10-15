import { ThemeProvider } from "./themeProvider";
import {
  Container,
  Header,
  Cards,
  AboutCard,
  WorkCard,
  SpotifyCard,
  MapCard,
  ResumeCard,
  Footer,
} from "./components/index";

export default function Home() {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <main className="flex min-h-screen">
        <Container>
          <Header />
          <Cards>
            <AboutCard />
            <WorkCard />
            <SpotifyCard />
            <MapCard />
            <ResumeCard />
          </Cards>
          <Footer />
        </Container>
      </main>
    </ThemeProvider>
  );
}
