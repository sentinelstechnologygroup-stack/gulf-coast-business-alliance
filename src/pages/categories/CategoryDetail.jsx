import React from 'react';
import { useParams, Link } from 'react-router-dom';
import CategoryPageTemplate from '@/components/categories/CategoryPageTemplate';
import { categoryData } from '@/lib/categoryData';
import { Button } from '@/components/ui/button';

export default function CategoryDetail() {
  const { slug } = useParams();
  const category = categoryData[slug];

  if (!category) {
    return (
      <div className="min-h-screen pt-32 pb-16 flex flex-col items-center justify-center bg-background">
        <p className="text-gold font-semibold uppercase tracking-wider text-sm mb-3">Category Not Found</p>
        <h1 className="font-heading text-3xl font-bold text-foreground mb-4">This category doesn't exist yet.</h1>
        <p className="text-muted-foreground mb-8 text-center max-w-md">The category you're looking for may not be published yet. Browse all available categories below.</p>
        <Link to="/categories"><Button className="bg-gold hover:bg-gold/90 text-white">Browse All Categories</Button></Link>
      </div>
    );
  }

  return <CategoryPageTemplate category={category} />;
}