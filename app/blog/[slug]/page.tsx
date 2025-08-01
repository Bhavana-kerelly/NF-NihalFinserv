'use client';
import { useParams } from 'next/navigation';
import StructuredLoanBlog from '@/components/Blogs/StructuredLoansBlog';
import FinancialPartnerBlog from '@/components/Blogs/FinancialPartnerBlog';
import DrivenByValuesBlog from '@/components/Blogs/DrivenByValuesBlog';
import LoansForProfessionalsBlog from '@/components/Blogs/LoansForProfessionalsBlog';

export default function BlogDetailPage() {
  const { slug } = useParams();

  switch (slug) {
    
    case 'structured-loans':
      return <StructuredLoanBlog />;
    case 'financial-partner':
      return <FinancialPartnerBlog />;
    case 'driven-by-values':
      return <DrivenByValuesBlog />;
    case 'loans-for-doctors-cas':
      return <LoansForProfessionalsBlog />;
    default:
      return (
        <div className="p-12 text-center">
          <h1 className="text-3xl font-bold text-red-600">404 - Blog Not Found</h1>
        </div>
      );
      
  }
}
