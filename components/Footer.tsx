/**
 * Footer component.
 */
export default function Footer() {
  return (
    <footer className="text-sm text-center border-t-2 bg-orange-600 max-w-full">
      <main>
        <section>
          <div className="content-container text-[16px] text-white">
            &copy; {new Date().getFullYear()} The Better Hong Kong Foundation. All rights reserved. {' '}
            <a href="https://she.com">Privacy Policy</a>
          </div>
        </section>
      </main>
    </footer>
  )
}
