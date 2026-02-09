import { AnnouncementBar } from "@/components/announcement-bar"
import { SiteHeader } from "@/components/site-header"
import { BreadcrumbNav } from "@/components/breadcrumb-nav"
import { ProductSection } from "@/components/product-section"
import { ProductDescription } from "@/components/product-description"
import { ProductReviews } from "@/components/product-reviews"
import { CustomerReviews } from "@/components/customer-reviews"
import { SiteFooter } from "@/components/site-footer"
import { FloatingCta } from "@/components/floating-cta"

export default function Page() {
  return (
    <div className="min-h-screen bg-[#ffffff]">
      <AnnouncementBar />
      <SiteHeader />
      <BreadcrumbNav />

      <main className="max-w-[1200px] mx-auto px-4 lg:px-8 pb-4">
        <ProductSection />
        <ProductDescription />
        <ProductReviews />
        <CustomerReviews />
      </main>
      <SiteFooter />
      <FloatingCta />
    </div>
  )
}
