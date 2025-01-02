import PromotionCardMenu from "../../shared/promotionOfferCard/PromotionCardMenu";
import PromotionOfferCard from "../../shared/promotionOfferCard/PromotionOfferCard";

const Promotion = () => {
  const offers = [
    {
      id: 1,
      image: "https://img.b112j.com/upload/announcement/image_156423.jpg",
      title: "JILI 6 iPhones Giveaway",
      subtitle: "Boost Your Play!",
      time: "Weekly Offer",
    },
    {
      id: 2,
      image: "https://img.b112j.com/upload/announcement/image_131940.jpg",
      title: "৳১৫ কোটিরও বেশি বোনাস",
      subtitle: "ক্রিকেট ম্যারাথন লিডারবোর্ড",
      time: "2024/09/16 0:00:00 ~ 2025/05/25 23:59:59s",
    },
    {
      id: 3,
      image: "https://img.b112j.com/upload/announcement/image_156423.jpg",
      title: "ফ্রি SKN Patriots জার্সি",
      subtitle: "SKN Patriots ওয়েলকাম অফার",
      time: "2024/09/16 0:00:00 ~ 2025/05/25 23:59:59s",
    },
    {
      id: 4,
      image: "https://img.b112j.com/upload/announcement/image_130083.jpg",
      title: "৳৭৭৭ Cocktail Night স্লট গেম বোনাস",
      subtitle: "ওয়েলকাম অফার",
      time: "2024/09/16 0:00:00 ~ 2025/05/25 23:59:59s",
    },
  ];
  return (
    <div>
      <div className="bg-[#4A4A4A] p-4">
        <div className="flex gap-2 overflow-x-auto scrollbar-hide">
          <PromotionCardMenu text="All" />
          <PromotionCardMenu text="Welcome Offer" />
          <PromotionCardMenu text="Slots" />
          <PromotionCardMenu text="Live Casino" />
          <PromotionCardMenu text="Sports" />
          <PromotionCardMenu text="Fishing" />
          <PromotionCardMenu text="E-sports" />
          <PromotionCardMenu text="Lottery" />
          <PromotionCardMenu text="Table" />
          <PromotionCardMenu text="Arcade" />
          <PromotionCardMenu text="Crash" />
        </div>
        <div className="flex items-center mt-4">
          <input
            type="text"
            placeholder="Promo Code"
            className="px-4 py-1 w-full rounded-l-md focus:outline-none"
          />
          <button className="px-4 py-1 bg-blue-500 text-white rounded-r-md hover:bg-blue-600 transition">
            Add
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 py-6">
          {offers?.map((offer) => (
            <PromotionOfferCard key={offer.id} offer={offer} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Promotion;
